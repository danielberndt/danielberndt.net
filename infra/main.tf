locals {
  project_prefix     = "danielberndt-net"
  subdomain          = "www"
  host               = "danielberndt.net"
  has_client_routing = false
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
    hetznerdns = {
      source  = "timohirt/hetznerdns"
      version = "~> 2.2.0"
    }
  }
}

provider "aws" {
  region     = "eu-central-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_access_key
}

provider "aws" {
  alias      = "virginia"
  region     = "us-east-1"
  access_key = var.aws_access_key
  secret_key = var.aws_secret_access_key
}
provider "hetznerdns" {
  apitoken = var.hetznerdns_token
}

resource "aws_acm_certificate" "main" {
  domain_name       = "${local.subdomain}.${local.host}"
  validation_method = "DNS"
  provider          = aws.virginia
}

resource "hetznerdns_record" "certificate" {
  for_each = {
    for dvo in aws_acm_certificate.main.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }

  name    = each.value.name
  value   = each.value.record
  ttl     = 60
  type    = each.value.type
  zone_id = var.hetznerdns_zone_id
}

resource "aws_acm_certificate_validation" "main" {
  certificate_arn = aws_acm_certificate.main.arn
  provider        = aws.virginia
}

resource "aws_s3_bucket" "main" {
  bucket        = "${local.project_prefix}-website"
  force_destroy = true
}

resource "aws_s3_bucket_website_configuration" "main" {
  bucket = aws_s3_bucket.main.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "404.html"
  }
}

resource "aws_s3_bucket_acl" "main" {
  bucket = aws_s3_bucket.main.id

  acl = "public-read"
}

data "aws_iam_policy_document" "s3_public_read" {
  statement {
    sid     = "PublicReadGetObject"
    effect  = "Allow"
    actions = ["s3:GetObject"]
    principals {
      type        = "*"
      identifiers = ["*"]
    }
    resources = [
      aws_s3_bucket.main.arn,
      "${aws_s3_bucket.main.arn}/*",
    ]
  }
}

resource "aws_s3_bucket_policy" "main" {
  bucket = aws_s3_bucket.main.id
  policy = data.aws_iam_policy_document.s3_public_read.json
}

locals {
  s3_origin_id = "S3-Website-${aws_s3_bucket_website_configuration.main.website_endpoint}"
}

resource "aws_cloudfront_response_headers_policy" "security_headers_policy" {
  name = "${local.project_prefix}-secure-headers"
  security_headers_config {
    content_type_options {
      override = true
    }
    frame_options {
      frame_option = "SAMEORIGIN"
      override     = true
    }
    referrer_policy {
      referrer_policy = "same-origin"
      override        = true
    }
    xss_protection {
      mode_block = true
      protection = true
      override   = true
    }
    strict_transport_security {
      access_control_max_age_sec = "63072000"
      include_subdomains         = true
      preload                    = true
      override                   = true
    }
  }
}

resource "aws_cloudfront_distribution" "s3_distribution" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "${local.project_prefix}-website"
  default_root_object = "index.html"

  origin {
    domain_name = aws_s3_bucket_website_configuration.main.website_endpoint
    origin_id   = local.s3_origin_id
    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1"]
    }
  }

  aliases = ["${local.subdomain}.${local.host}"]

  default_cache_behavior {
    target_origin_id       = local.s3_origin_id
    allowed_methods        = ["GET", "HEAD", "OPTIONS"]
    cached_methods         = ["GET", "HEAD"]
    viewer_protocol_policy = "redirect-to-https"
    compress               = true

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    min_ttl     = 43200
    default_ttl = 86400
    max_ttl     = 31536000

    response_headers_policy_id = aws_cloudfront_response_headers_policy.security_headers_policy.id
  }

  dynamic "custom_error_response" {
    for_each = local.has_client_routing ? [1] : []
    content {
      error_code            = 404
      response_code         = 200
      error_caching_min_ttl = 43200
      response_page_path    = "/index.html"
    }
  }

  price_class = "PriceClass_200"

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = false
    acm_certificate_arn            = aws_acm_certificate_validation.main.certificate_arn
    minimum_protocol_version       = "TLSv1"
    ssl_support_method             = "sni-only"
  }

  # wait only until it's "InProgress"
  wait_for_deployment = false
}

data "aws_iam_policy_document" "s3_write_access" {
  statement {
    actions   = ["s3:ListAllMyBuckets"]
    resources = [aws_s3_bucket.main.arn]
    effect    = "Allow"
  }
  statement {
    actions   = ["s3:*Object", "s3:*ObjectAcl"]
    resources = [aws_s3_bucket.main.arn, "${aws_s3_bucket.main.arn}/*"]
    effect    = "Allow"
  }
}

data "aws_iam_policy_document" "cloudfront" {
  statement {
    actions   = ["cloudfront:CreateInvalidation"]
    resources = [aws_cloudfront_distribution.s3_distribution.arn]
    effect    = "Allow"
  }
}

resource "aws_iam_user" "deploy_user" {
  name = "${local.project_prefix}-deploy"
}

resource "aws_iam_access_key" "deploy_user" {
  user = aws_iam_user.deploy_user.name
}

resource "aws_iam_user_policy" "s3" {
  user   = aws_iam_user.deploy_user.name
  policy = data.aws_iam_policy_document.s3_write_access.json
}

resource "aws_iam_user_policy" "cloudfront" {
  user   = aws_iam_user.deploy_user.name
  policy = data.aws_iam_policy_document.cloudfront.json
}

resource "local_sensitive_file" "dot_env" {
  content  = <<-EOT
      AWS_ACCESS_KEY_ID="${aws_iam_access_key.deploy_user.id}"
      AWS_SECRET_ACCESS_KEY="${aws_iam_access_key.deploy_user.secret}"
      AWS_DEFAULT_REGION="${aws_s3_bucket.main.region}"
      AWS_CLOUDFRONT_DISTRIBUTION_ID="${aws_cloudfront_distribution.s3_distribution.id}"
      S3_BUCKET="${aws_s3_bucket.main.bucket}"
    EOT
  filename = "../.env-deploy.prod"
}

locals {
  domain_parts = split(".", "${local.subdomain}.${local.host}")
}

resource "hetznerdns_record" "main" {
  zone_id = var.hetznerdns_zone_id
  name    = join(".", slice(local.domain_parts, 0, length(local.domain_parts) - 2))
  value   = "${aws_cloudfront_distribution.s3_distribution.domain_name}."
  type    = "CNAME"
  # ttl     = 3600
}

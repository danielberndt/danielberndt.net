#!/bin/bash -e
set -e
set -a # automatically export all variables
source $DOTENV_FILE
set +a


# all non html resources get big cache
aws s3 sync dist s3://$S3_BUCKET --acl public-read --delete \
  --exclude "*/.DS_Store" --exclude "*.html" --exclude "favicon.ico" \
  --cache-control="max-age=315360000, no-transform, public"

# html resources get no cache
aws s3 sync dist s3://$S3_BUCKET --acl public-read --delete \
  --exclude "*" --include "*.html" \
  --cache-control="max-age=0, no-transform, public"

# favicon get a little cache
aws s3 sync dist s3://$S3_BUCKET --acl public-read --delete \
  --exclude "*" --include "favicon.ico" \
  --cache-control="max-age=43200, no-transform, public"

# `create-invalidation` is only supported for preview version
aws configure set preview.cloudfront true
aws cloudfront create-invalidation --distribution-id ${AWS_CLOUDFRONT_DISTRIBUTION_ID} --paths '/*'

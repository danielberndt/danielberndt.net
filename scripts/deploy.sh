#!/bin/bash -e
set -e

# all non html resources get big cache
aws s3 sync dist s3://$DANIELBERNDTNET_S3_BUCKET --profile danielberndt --acl public-read --region eu-central-1 --delete --exclude "*/.DS_Store" --exclude "*.html" --cache-control="max-age=315360000, no-transform, public"
# html resources get no cache
aws s3 sync dist s3://$DANIELBERNDTNET_S3_BUCKET --profile danielberndt --acl public-read --region eu-central-1 --delete --exclude "*" --include "*.html" --cache-control="max-age=0, no-transform, public"

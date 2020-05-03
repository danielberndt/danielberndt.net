/* eslint-disable no-console */
const minimist = require("minimist");
const exec = require("@danielberndt/exec");
const path = require("path");

const CONFIG = {
  favicon: path.join(__dirname, "./static/favicon.ico"),
  robotstxt: path.join(__dirname, "./static/robots.txt"),
  dist: path.join(__dirname, "./public"),
};

const options = minimist(process.argv.slice(2));

const task = (name, fn) => {
  if (name && options._[0] === name) {
    console.log(`Execute: "${name}"`);
    fn();
  }
};

async function deploy() {
  await exec("yarn build");

  exec(`cp ${CONFIG.favicon} ${CONFIG.dist}`);
  exec(`cp ${CONFIG.robotstxt} ${CONFIG.dist}`);

  const opts = {
    bucket: process.env.S3_BUCKET,
    region: process.env.AWS_REGION,
    distributionId: process.env.CLOUDFRONT_ID,
  };
  const sharedSyncArgs = [
    CONFIG.dist,
    `s3://${opts.bucket}`,
    "--acl public-read",
    `--region ${opts.region}`,
    "--delete",
    '--exclude ".DS_Store"',
  ];

  const assetArgs = [
    '--exclude "*.html"',
    '--exclude "*.json"',
    "--size-only",
    '--cache-control="max-age=315360000, no-transform, public"',
  ];

  await exec(`aws s3 sync ${[...sharedSyncArgs, ...assetArgs].join(" ")}`);

  const htmlArgs = [
    '--exclude "*"',
    '--include "*.html"',
    '--include "*.json"',
    '--cache-control="max-age=60, no-transform, public"',
  ];
  await exec(`aws s3 sync ${[...sharedSyncArgs, ...htmlArgs].join(" ")}`);
  // `create-invalidation` is only supported for preview version
  await exec(`aws configure set preview.cloudfront true`);
  await exec(
    `aws cloudfront create-invalidation --distribution-id ${opts.distributionId} --paths '/*'`
  );
}

task("deploy", async () => {
  require("dotenv").config({path: path.join(__dirname, ".env")});
  await deploy();
});

task("deploy-from-external-env", async () => {
  await deploy();
});

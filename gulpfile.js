const gulp = require("gulp");
const awspublish = require("gulp-awspublish");
const awspublishRouter = require("gulp-awspublish-router");
const cloudfront = require("gulp-cloudfront-invalidate-aws-publish");
const exec = require("@danielberndt/exec");
const del = require("del");
const parallelize = require("concurrent-transform");

const CONFIG = {
  dist: "./public",
  favicon: "./favicon.ico",
  robots: "./robots.txt",
};

function loadEnv(envFile) {
  return () => {
    require("dotenv").config({path: envFile});
  };
}

const build = () => exec("yarn build");

gulp.task("clean-dist", () => del([CONFIG.dist]));
gulp.task("favicon", ["clean-dist"], () => gulp.src(CONFIG.favicon).pipe(gulp.dest(CONFIG.dist)));
gulp.task("robots", ["clean-dist"], () => gulp.src(CONFIG.robots).pipe(gulp.dest(CONFIG.dist)));

const deployCmd = () => {
  const publisher = awspublish.create({
    params: {Bucket: process.env.S3_BUCKET},
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  });

  return (
    gulp
      .src([`${CONFIG.dist}/**`])
      .pipe(
        awspublishRouter({
          cache: {
            // cache for 20 years by default
            cacheTime: 630720000,
          },
          routes: {
            "^.+\\.(html|json|txt)$": {
              cacheTime: 900,
            },
            "^.+$": "$&",
          },
        })
      )
      .pipe(parallelize(publisher.publish(), 10))
      // .pipe(publisher.sync()) uncomment to delete old files
      .pipe(
        cloudfront({
          distribution: process.env.CLOUDFRONT_ID,
          indexRootPath: true,
          accessKeyId: process.env.AWS_ACCESS_KEY,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        })
      )
      .pipe(publisher.cache())
      .pipe(awspublish.reporter())
  );
};

gulp.task("load-env", loadEnv(".env"));
gulp.task("build", ["clean-dist", "load-env"], build);
gulp.task("deploy", ["build", "favicon", "robots"], deployCmd);

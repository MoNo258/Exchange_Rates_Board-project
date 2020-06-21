
const gulp          = require("gulp");
const sass          = require("gulp-sass");
const sourcemaps    = require("gulp-sourcemaps");
const autoprefixer  = require("gulp-autoprefixer");
const c             = require("ansi-colors");
const notifier      = require("node-notifier");
const rename        = require("gulp-rename");
const wait          = require("gulp-wait");
const csso          = require("gulp-csso");
const browserSync   = require("browser-sync").create();
const webpack       = require("webpack");
const fileinclude   = require('gulp-file-include');

sass.compiler = require('sass'); ////node-sass for classic sass

const showError = function(err) {
  notifier.notify({
    title: "Error in sass",
    message: err.messageFormatted
  });

  console.log(c.red("==============================="));
  console.log(c.red(err.messageFormatted));
  console.log(c.red("==============================="));
};

// const server = (cb) => {
//     browserSync.init({
//         server: {
//             baseDir: "./distribution"
//         },
//         notify: false,
//         host: "192.168.1.192",
//         port: 3000,
//         open: true,
//         //browser: "google chrome"
//     });
//
//     cb();
// };

function server(cb) {
  browserSync.init({
    server: {
      baseDir: "./distribution"
    },
    notify: false,
    host: "192.168.1.192",
    port: 3001,
  });
  cb();
}

const css = function() {
  return gulp.src("development/scss/main.scss")
      .pipe(wait(500))
      .pipe(sourcemaps.init())
      .pipe(
          sass({
            outputStyle : "expanded"
          }).on("error", showError)
      )
      .pipe(autoprefixer())
      .pipe(rename({
        suffix: ".min",
        basename: "main"
      }))
      .pipe(csso())
      .pipe(sourcemaps.write("."))
      .pipe(gulp.dest("distribution/css"))
      .pipe(browserSync.stream());
};

const js = function(cb) { //https://github.com/webpack/docs/wiki/usage-with-gulp#normal-compilation
  return webpack(require("./webpack.config.js"), function(err, stats) {
    if (err) throw err;
    console.log(stats.toString());
    browserSync.reload();
    cb();
  })
};

const html = function(cb) {
  return gulp.src('development/html/index.html')
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('distribution'))
};

//html app?

const html_app = function(cb) {
  return gulp.src('development/html/app.html')
      .pipe(fileinclude({
        prefix: '@@',
        basepath: '@file'
      }))
      .pipe(gulp.dest('distribution'))
};

const htmlReload = function(cb) {
  browserSync.reload();
  cb();
};

const watch = function() {
  gulp.watch("development/scss/**/*.scss", {usePolling : true}, gulp.series(css));
  gulp.watch("development/js/**/*.js", {usePolling : true}, gulp.series(js));
  gulp.watch("development/html/**/*.html", {usePolling : true}, gulp.series(html_app, htmlReload));
  gulp.watch("development/html/**/*.html", {usePolling : true}, gulp.series(html, htmlReload));
};

const startText = function(cb) {
  console.log(c.yellow(`
        ───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
        ───█▒▒░░░░░░░░░▒▒█───
        ────█░░█░░░░░█░░█────
        ─▄▄──█░░░▀█▀░░░█──▄▄─
        █░░█─▀▄░░░░░░░▄▀─█░░█
    `));
  console.log(c.blue('Start :)'));
  cb();
};

exports.default = gulp.series(startText, css, html, html_app, js, server, watch);
exports.css = css;
exports.html = html;
exports.html_app = html_app;
exports.watch = watch;
exports.js = js;
const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");
const fs = require("graceful-fs");
const webpack = require("webpack-stream");
const changed = require("gulp-changed");

function scripts() {
  return src(["src/js/*.js"])
    .pipe(uglify())
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(dest("./build/js"))
    .pipe(browserSync.stream());
}

function html() {
  return src("src/index.html").pipe(dest("build")).pipe(browserSync.stream());
}

function styles() {
  return src("src/scss/style.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("./build/css"))
    .pipe(browserSync.stream());
}

function watching() {
  watch(["src/scss/style.scss"], styles);
  watch(["src/js/*.js"], scripts);
  watch(["src/*.html"], html);
  watch(["src/img/**/*"], images);
}

function browsersync() {
  browserSync.init({
    server: {
      baseDir: "build/",
    },
  });
}

function images() {
  return (
    src("./src/img/**/*")
      .pipe(changed("./build/img/"))
      // .pipe(imagemin({ verbose: true }))
      .pipe(dest("./build/img/"))
  );
}
function cleanDist(done) {
  if (fs.existsSync("./build/")) {
    return src("./build/", { read: false }).pipe(clean({ force: true }));
  }
  done();
}

// function building() {
//   return src(["src/css/style.min.css", "src/js/main.min.js", "src/**/*.html"], {
//     base: "src",
//   }).pipe(dest("build"));
// }

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browsersync = browsersync;

exports.build = series(
  cleanDist,
  parallel(scripts, styles, images, html),
  parallel(browsersync, watching)
);

exports.default = parallel(scripts, styles, browsersync, watching);

const { src, dest, watch, parallel, series } = require("gulp");
const scss = require("gulp-sass")(require("sass"));
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
    .pipe(dest("./docs/js"))
    .pipe(browserSync.stream());
}

function html() {
  return src("src/index.html").pipe(dest("docs")).pipe(browserSync.stream());
}

function styles() {
  return src("src/scss/style.scss")
    .pipe(scss({ outputStyle: "compressed" }))
    .pipe(dest("./docs/css"))
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
      baseDir: "docs/",
    },
  });
}

function images() {
  return (
    src("./src/img/**/*")
      .pipe(changed("./docs/img/"))
      // .pipe(imagemin({ verbose: true }))
      .pipe(dest("./docs/img/"))
  );
}
function cleanDist(done) {
  if (fs.existsSync("./docs/")) {
    return src("./docs/", { read: false }).pipe(clean({ force: true }));
  }
  done();
}

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

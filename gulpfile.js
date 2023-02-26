const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifyCss = require('gulp-clean-css');
sass.compiler = require('node-sass');

function build() {
    return src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(dest('css/'))
}

// function devWatch() {
//     return watch('scss/*.scss', build);
// }

exports.build = build;
// exports.devWatch = devWatch;
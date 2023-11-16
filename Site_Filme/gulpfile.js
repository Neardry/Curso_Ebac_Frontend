const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');

function Sass() {
    return gulp.src('./src/styles/main.scss').pipe(sourcemaps.init()).pipe(sass({
        outputStyle: 'compressed'
    })).pipe(sourcemaps.write('./maps')).pipe(gulp.dest('./dist/styles'))
};

function ComprimeImagem() {
    return gulp.src('./src/img/*').pipe(imagemin()).pipe(gulp.dest('./dist/img'));
}


exports.default = gulp.parallel(ComprimeImagem, Sass);


exports.watch = function() {
    gulp.watch('./src/styles/*.scss', {ignoreInitial: false}, gulp.parallel(Sass));
}
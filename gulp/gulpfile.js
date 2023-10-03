const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require('gulp-imagemin');
const obfuscate = require('gulp-obfuscate');
const uglify = require('gulp-uglify');

function compilaSass() {
    return gulp.src('./source/styles/main.scss').pipe(sourcemaps.init()).pipe(sass({
        outputStyle: 'compressed'
    })).pipe(sourcemaps.write('./maps')).pipe(gulp.dest('./build/styles'));
};

function comprimeJs() {
    return gulp.src('./source/js/*.js').pipe(uglify()).pipe(obfuscate()).pipe(gulp.dest('./build/js'));
};

function comprimeImagem() {
    return gulp.src('source/images/*').pipe(imagemin()).pipe(gulp.dest('./build/images'));
};

exports.default = function() {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compilaSass));
    gulp.watch('./source/js/*.js', {ignoreInitial: false}, gulp.series(comprimeJs));
    gulp.watch('source/images/*', {ignoreInitial: false}, gulp.series(comprimeImagem));
}
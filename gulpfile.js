const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require ('browser-sync').create();
const minifyCSS = require('gulp-minify-css');

function style(){
    return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}
function miniCSS(){
    return gulp.src('./css/*.css')
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest('./css/*.min.css'));
}
function watch(){
    browserSync.init({
        server:{
            baserDir:'./'
        }
    });
    gulp.watch('./scss/*.scsss', style).on('change',browserSync.reload);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change',browserSync.reload);
}

const defaultTaskt = gulp.parallel(style,watch)

exports.default = defaultTaskt;
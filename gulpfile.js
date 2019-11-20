const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require ('browser-sync').create();


function style(){
    return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}

function watch(){
    browserSync.init({
        server:{
            baserDir:'./'
        }
    });
    gulp.watch('./scss/*.scsss', style);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change',browserSync.reload);
}

const defaultTaskt = gulp.parallel(style, watch)

exports.default = defaultTaskt;
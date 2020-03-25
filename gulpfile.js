const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require ('browser-sync').create();
// const minifyCSS = require('gulp-minify-css');

function style(){
    return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
}
// function miniCSS(){
//     return gulp.src('./css/*.css')
//     .pipe(minifyCSS({keepBreaks:true}))
//     .pipe(gulp.dest('./css/'));
// }

function moveFile() {
     return gulp.src(['node_modules/jquery/dist/*.js','node_modules/popper.js/dist/umd/*.js','node_modules/bootstrap/dist/js/*.js'])
     .pipe(gulp.dest('js/'));
  }
function watch(){
    browserSync.init({
        server:{
            baserDir:'./'
        }
    });
    gulp.watch('./scss/*.scsss', style);
    gulp.watch('./css/*.css').on('change',browserSync.reload);
    gulp.watch('./scss/*.scss').on('change',browserSync.reload);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/*.js').on('change',browserSync.reload);
}

const defaultTaskt = gulp.parallel(style, moveFile,watch);

exports.default = defaultTaskt;
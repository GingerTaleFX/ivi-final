var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var less = require('gulp-less');
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var pug = require('gulp-pug');

// less to css
function MakeCss(){
    return gulp.src('less/style.less')
    .pipe(less())
    .pipe(autoprefixer({
        browsers: ['< 0.1%'],
        cascade: false
    }))
    .pipe(minifyCSS({keepBreaks:true}))
    .pipe(gulp.dest('dest'))
    .pipe(reload({stream:true}));
};

//pug to html
function MakeHTML() {
    return gulp.src('pug/index.pug')
    .pipe(pug())
    .pipe(gulp.dest('dest'))
    .pipe(reload({stream:true}));
};

//server
function browserSync() {
    browserSync.init({
        server: {
          baseDir: './dest'
        },
        port: 8080,
        open: true,
        notify: false
      })
};

//watch changes
function watchFiles() {
    gulp.watch('less/*.less', MakeCss);
    gulp.watch('pug/*.pug', MakeHTML);
};

//series

var series = gulp.parallel(watchFiles, browserSync);

//tasks
gulp.task('style', MakeCss);
gulp.task('html', MakeHTML);
gulp.task('watch', watchFiles);
gulp.task('browser-sync', browserSync);
gulp.task('series', series);
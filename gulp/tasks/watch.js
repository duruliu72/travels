var gulp= require('gulp');
var browserSync=require('browser-sync').create();
var styles=require('./styles');
var scripts=require('./scripts');

function cssInject(){
    return gulp.src('./docs/temp/styles/styles.css')
      .pipe(browserSync.stream());
}
module.exports = function(cb){
    browserSync.init({
        notify:false,
        server:{
            baseDir: "docs"
        }
    });
    gulp.watch('./docs/**/*.html').on('change',browserSync.reload);
    gulp.watch('./docs/assets/styles/**/*.css',gulp.series(styles,cssInject));
    gulp.watch('./docs/assets/scripts/**/*.js',scripts).on('change',browserSync.reload);
    cb();
}
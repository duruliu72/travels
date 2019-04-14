var gulp= require('gulp');
var browserSync=require('browser-sync').create();
var styles=require('./styles');
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
    
    gulp.watch('./docs/**/*.html',function(cb){
        browserSync.reload();
        cb();
    });
    gulp.watch('./docs/assets/styles/**/*.css',gulp.series(styles,cssInject));
    cb();
}
var gulp= require('gulp'),

browserSync=require('browser-sync').create();
function cssInject(){
    return gulp.src('./app/temp/styles/styles.css')
      .pipe(browserSync.stream());
}  
function watch(cb){
    browserSync.init({
      notify:false,
      server: {
            baseDir: "app"
        }
    });
    gulp.watch('./app/index.html',function(cb){
      browserSync.reload();
      cb();
    });
    gulp.watch('./app/assets/styles/**/*.css',gulp.series(styles,cssInject));
    cb();
  }
  exports.watch=watch;
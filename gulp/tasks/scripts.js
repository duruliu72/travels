var gulp= require('gulp');
var webpack=require('webpack');
module.exports = function(cb){
    webpack(require('../../webpack.config.js'),function(err,stats){
        if(err){
            console.log(err.toString());
        }
        console.log(stats.toString());
        cb();
    });
}
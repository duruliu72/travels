const gulp = require('gulp');
let watch=require('./gulp/tasks/watch');
var scripts=require('./gulp/tasks/scripts');
exports.watch=watch;
exports.scripts=scripts;
require('dotenv').load();
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


gulp.task('test', function() {
  nodemon({
  		exec: 'npm test',
		ext: 'js json',
		legacyWatch: true
	})
   .on('start', function () {
	 console.log('Starting testing gulp task!');
   });
});

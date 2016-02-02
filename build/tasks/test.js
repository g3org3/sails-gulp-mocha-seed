require('dotenv').load();
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


gulp.task('test', ['watch'], function() {
  nodemon({ exec: 'npm test',
			ext: 'js',
	})
   .on('start', function () {
	 console.log('Starting testing gulp task!');
   });
});

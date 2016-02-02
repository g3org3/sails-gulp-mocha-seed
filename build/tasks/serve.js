require('dotenv').load();
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


gulp.task('serve', ['watch'], function() {
  nodemon({ script: 'app',
            ext: 'html js',
})
   .on('start', function () {
     console.log('started!');
   });
});

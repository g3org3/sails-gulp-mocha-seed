require('dotenv').load();
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');


gulp.task('serve', function() {
  nodemon({ script: 'app',
            ext: 'jade js json',
            legacyWatch: true
})
   .on('start', function () {
     console.log('started!');
   });
});

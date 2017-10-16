var gulp = require('gulp');
//const util = require('util');
var proc = require('child_process');
//var exec = util.promisify(proc.exec);
var mkdirs = require('mkdirs');
var open = require('gulp-open');
var runSequence = require('run-sequence');

var runCommand = function(command) {
  try {
    proc.execSync(command, function(err, stdout, stderr) {
      console.log('stdout:', stdout);
      console.log('stderr:', stderr);
    })
  }
  catch (e) {
    console.log('exception:', e);
  }
}

var asyncRunCommand = function(command) {
  try {
    proc.exec(command, function(err, stdout, stderr) {
      console.log('stdout:', stdout);
      console.log('stderr:', stderr);
    })
  }
  catch (e) {
    console.log('exception:', e);
  }
}

// var runCommand2 = function(command) {
//   try {
//     const { stdout, stderr } = exec(command);
//     console.log('stdout:', stdout);
//     console.log('stderr:', stderr);
//   } catch(e) {
//     console.log(e); // 30
//   }
// }

gulp.task("mongo-stop", function() {
  var command = 'mongo admin --eval "db.shutdownServer();"'
  runCommand(command);
});

gulp.task("mongo-start", function() {
  var paths = { dbDir: "debug/db", dbLogs: "debug/dbLogs" };
  var command = "mongod --dbpath " + paths.dbDir + "/ --logpath " + paths.dbLogs + "/mongo.log";
  mkdirs(paths.dbDir);
  mkdirs(paths.dbLogs);
  asyncRunCommand(command);
});

gulp.task("open-localhost", function(){
  var options = {
    uri: 'http://localhost:4040',
    app: 'chrome'
  };
  gulp.src(__filename)
  .pipe(open(options));
});

gulp.task('vscode-debug-start', function() {
  runSequence("mongo-stop", "mongo-start", "open-localhost");
  console.log('done');
});

// var gulp = require('gulp');
// var ts = require('gulp-typescript');
// var merge = require('merge2');
// var sass = require('gulp-sass');

// gulp.task('scripts', function() {
//   var tsResult = gulp.src('*.ts')
//     .pipe(ts({
//         declarationFiles: true,
//         noExternalResolve: true,
//         noImplicitAny: true,
//         out: 'main.js'
//       }));
 
//   return merge([
//     tsResult.dts.pipe(gulp.dest('release/definitions')),
//     tsResult.js.pipe(gulp.dest('release/js'))
//     ]);
// });

// gulp.task('sass', function () {
//   gulp.src('*.scss')
//     .pipe(sass.sync().on('error', sass.logError))
//     .pipe(gulp.dest('./css'));
// });
 
// gulp.task('watch', function () {
//   gulp.watch('*.scss', ['sass']);
//   gulp.watch('*.ts', ['scripts']);
// });
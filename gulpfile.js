var gulp = require('gulp');
var proc = require('child_process');
var mkdirs = require('mkdirs');
var open = require('gulp-open');
var runSequence = require('run-sequence');
var wait = require('gulp-wait');

// --------------
// Helpers
// --------------

var spawnCommand = function(command, args) {
  const subprocess = proc.spawn(command, args, { 
    cwd: ".", 
    env: process.env, 
    detached: true,
    stdio: 'ignore' 
  });

  // subprocess.stdout.on('data', (data) => {
  //   console.log(`stdout: ${data}`);
  // });
  
  // subprocess.stderr.on('data', (data) => {
  //   console.log(`stderr: ${data}`);
  // });
  
  // subprocess.on('close', (code) => {
  //   console.log(`child process exited with code ${code}`);
  // });

  subprocess.unref();
}

// --------------
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

// --------------
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

// --------------
// Tasks
// --------------

gulp.task("mongo-stop", function() {
  var command = 'mongo admin --eval "db.shutdownServer();"'
  runCommand(command);
});

// --------------
gulp.task("mongo-start", function() {
  var paths = { dbDir: "debug/db", dbLogs: "debug/dbLogs" };
  mkdirs(paths.dbDir);
  mkdirs(paths.dbLogs);
  spawnCommand("mongod", ["--dbpath", paths.dbDir, "--logpath", `${paths.dbLogs}/mongo.log`]);
});

// --------------
gulp.task("open-localhost", function(){
  var options = {
    uri: 'http://localhost:4040',
    app: 'chrome'
  };
  gulp.src(__filename)
  .pipe(open(options));
});

// --------------
gulp.task("npm-debug", function() {
  asyncRunCommand('npm start');
});

// --------------
gulp.task('vscode-debug-start', function() {
  runSequence(
    "mongo-stop", 
    "mongo-start", 
    //"npm-debug", 
    "open-localhost",
    function() {
      gulp.src(__filename)
        .pipe(wait({ duration: 1000, verbose: true }));
    });
});
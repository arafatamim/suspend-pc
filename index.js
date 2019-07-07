var cp = require("child_process");

module.exports = function(callback) {
  var cmd = "";

  switch (process.platform) {
    case "win32":
      cmd = `powercfg -hibernate off && start /min "" %windir%System32\rundll32.exe powrprof.dll,SetSuspendState 0,1,0 && sleep 5 && powercfg -hibernate on`;
      break;
    case "linux":
      cmd = `systemctl suspend`;
      break;
    case "darwin":
      cmd = `pmset sleepnow`;
      break;
    case "freebsd":
    case "openbsd":
      cmd = `zzz`;
      break;
    default:
      throw new Error("Unsupported OS");
  }
  console.log(cmd);

  cp.execSync(cmd, function(err, stdout, stderr) {
    callback(err, stdout, stderr);
  });
};

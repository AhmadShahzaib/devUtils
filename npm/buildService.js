const chalk = require("chalk");
const { execSync } = require('child_process');

const { readJSONFromLaunchJSON, resolvePath, execCmdSync } = require("./helperFunctions");
const executeCommand = (cmd) => {
  try {
    execSync(cmd, { stdio: 'inherit' });
  } catch (error) {
    console.error(error);
  }
};

(function constructScript() {
  readJSONFromLaunchJSON().forEach((x) => {
    let serviceName = x.cwd.split("/")[1];
    let resolvedPath = resolvePath(serviceName);

    try {
      executeCommand(`cd ${resolvedPath} && git push`);
      console.log(`Command succeeded for: ${chalk.green(serviceName)}`)

    } catch (err) {
      console.log(`Command failed for service: ${chalk.red(serviceName)}`)
    }
  });
})();

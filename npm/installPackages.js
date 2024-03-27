const path = require("node:path");
const chalk = require("chalk");

const { readJSONFromLaunchJSON, resolvePath, execCmdSync } = require("./helperFunctions");

const executeCommand = (cmd) => execCmdSync(cmd);


(function constructScript() {
  readJSONFromLaunchJSON().forEach((x) => {
    let serviceName = x.cwd.split("/")[1];
    let resolvedPath = resolvePath(serviceName);

    try {
      executeCommand(`cd ${resolvedPath} && npm i`);
      console.log(`Command succeeded for: ${chalk.green(serviceName)}`)

    } catch (err) {
      console.log(`Error in: ${chalk.red(serviceName)}`)
    }
  });
})();

const path = require("node:path");
const chalk = require("chalk");

const { readJSONFromLaunchJSON, resolvePath, execCmdSync } = require("./helperFunctions");

const executeCommand = (cmd) => execCmdSync(cmd);

(function constructScript(service) {
  readJSONFromLaunchJSON().forEach((x) => {
    let serviceName = x.cwd.split("/")[1];
    let resolvedPath = resolvePath(serviceName);
    if (resolvedPath.endsWith(service)) {
      try {
        executeCommand(`cd ${resolvedPath} && rd /s /q dist && rd /s /q node_modules &&  rd /s /q package-lock.json`);
        console.log(`Command succeeded for: ${chalk.green(serviceName)}`)
      } catch (err) {
        console.log(`Command failed for service: ${chalk.red(serviceName)}`)
      }
    }
  });
})(process.argv[2]);


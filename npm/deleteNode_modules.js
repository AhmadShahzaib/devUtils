const path = require("node:path");
const chalk = require("chalk");

const { readJSONFromLaunchJSON, resolvePath, execCmdSync } = require("./helperFunctions");

const executeCommand = (cmd) => execCmdSync(cmd);

const deleteDistDirectory = (resolvedPath) => {
  try {
    execCmdSync(`cd ${resolvedPath} && rd /s /q dist`)
  } catch (error) {
  }
};

const deleteNodeModulesDirectory = (resolvedPath) => {
  try {
    execCmdSync(`cd ${resolvedPath} && rd /s /q node_modules`);
  } catch (error) {
  }
}
const deletePackageLogFile = (resolvedPath) => {
  try {
    execCmdSync(`cd ${resolvedPath} && del /F package-lock.json`)
  } catch (error) {
  }
};

(function constructScript() {
  readJSONFromLaunchJSON().forEach((x) => {
    let serviceName = x.cwd.split("/")[1];
    let resolvedPath = resolvePath(serviceName);

    try {
      deleteDistDirectory(resolvedPath);
      deleteNodeModulesDirectory(resolvedPath);
      deletePackageLogFile(resolvedPath);
      console.log(`Command succeeded for: ${chalk.green(serviceName)}`)
    } catch (err) {
      console.log(`Command failed for service: ${chalk.red(serviceName)}`)
      console.error(chalk.gray(err.message))

    }
  });
})();


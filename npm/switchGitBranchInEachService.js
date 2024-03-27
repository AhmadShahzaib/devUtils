const fs = require("fs");
const path = require("node:path");
const { readJSONFromLaunchJSON, resolvePath, execCmdSync } = require("./helperFunctions");

const chalk = require("chalk");

const branchName = "dev";
const switchBranch = (resolvedPath) => {
  try {
    execCmdSync(`cd ${resolvedPath} && git checkout ${branchName}`);
  } catch (error) {
    console.log(`Command failed for service: ${chalk.red(serviceName)}, with message: ${error?.message}`)
  }
}


const pullBranch = (resolvedPath) => {
  try {
    execCmdSync(`cd ${resolvedPath} && git pull`);
  } catch (error) {
    console.log(`Command failed for service: ${chalk.red(serviceName)}, with message: ${error?.message}`)
  }
}

(function constructScript() {
  // the following wont work if the source file is having comments or trailing comma
  // let data = JSON.parse(fs.readFileSync("../../.vscode/launch.json", "utf8"));
  readJSONFromLaunchJSON().forEach((x) => {
    let serviceName = x.cwd.split("/")[1];
    // if executing directly via node, the below path will work otherwise need to replace .../../ with ../
    let resolvedPath = resolvePath(serviceName);
    try {
      // execCmdSync(`cd ${resolvedPath} && git checkout ${branchName} && git pull`);
      switchBranch(resolvedPath);
      pullBranch(resolvedPath)
      console.log(`Command succeeded for: ${chalk.green(serviceName)}`)
    } catch (err) {
      console.log(`Command failed for service: ${chalk.red(serviceName)}`)
    }
  });
})();

const path = require("node:path");
const chalk = require("chalk");

const { readJSONFromLaunchJSON, resolvePath, execCmdSync } = require("./helperFunctions");

(function constructScript() {
  readJSONFromLaunchJSON().forEach((x) => {
    let serviceName = x.cwd.split("/")[1];
    let resolvedPath = resolvePath("../", serviceName);
    let command = `${serviceName}\\dist\\`;

    try {
      execCmdSync(`copy ${resolvedPath}\\.env ${command}.env `);
      console.log(`Command succeeded for: ${chalk.green(serviceName)}`)
    } catch (error) {
      console.log(`Command failed for service: ${chalk.red(serviceName)}`)
    }
  });
})();

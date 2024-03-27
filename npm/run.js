const fs = require("fs");
const path = require("node:path");
const { readJSONFromLaunchJSON, resolvePath, execCmdSync } = require("./helperFunctions");
const chalk = require("chalk");
const { execSync } = require('child_process');



const execCommand = (cmd) => {
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

    let command = `dist/main.js`;

    if (fs.existsSync(`${resolvedPath}/${command}`)) {
      foundAny = true;
      try {
        execCommand(`cd ${resolvedPath} && pm2 start ${command} --name ${serviceName}`);
        console.log(`Command succeeded for: ${chalk.green(serviceName)}`)

      } catch (err) {
        console.log(`Could not spin up: ${chalk.red(serviceName)}, may be this service is already running under pm2`)
      }

    } else {
      console.log(`There is no dist directory in: ${chalk.yellow(serviceName)} `)
      return;
    }

  });
})();

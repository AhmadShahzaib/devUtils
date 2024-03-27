const fs = require("fs");
const path = require("node:path");
const { execSync } = require("child_process");

const readJSONFromLaunchJSON = () => {
  let resolvedPath = resolvePath(".vscode/launch.json");
  // the following wont work if the source file is having comments or trailing comma
  let data = JSON.parse(fs.readFileSync(resolvedPath), "utf8");
  if (data) return data.configurations;
  else return [];
};

const resolvePath = (serviceName, segment) => path.resolve(__dirname, segment ?? "../../", serviceName);

const execCmdSync = (cmd) => execSync(cmd, { shell: "cmd.exe", stdio: [] });

module.exports = {
  readJSONFromLaunchJSON,
  resolvePath,
  execCmdSync
};

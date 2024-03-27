const fs = require("fs");
const path = require("node:path");
const { readJSONFromLaunchJSON, resolvePath } = require("./helperFunctions");

let fileContents = `//npm.pkg.github.com/:_authToken=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
@shafiqrathore:registry=https://npm.pkg.github.com`;

(function constructScript() {
  // the following wont work if the source file is having comments or trailing comma
  // let data = JSON.parse(fs.readFileSync("../../.vscode/launch.json", "utf8"));
  readJSONFromLaunchJSON().forEach((x) => {
    let serviceName = x.cwd.split("/")[1];
    // if executing directly via node, the below path will work otherwise need to replace .../../ with ../
    let resolvedPath = resolvePath(serviceName);
    let filePath = `${resolvedPath}\\.npmrc`;

    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath); // delete file
      fs.writeFileSync(filePath, fileContents); //create file
      console.log("replaced in " + serviceName);
    }
  });
})();

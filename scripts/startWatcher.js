var path = require('path');
var shell = require('shelljs');

var mashupsPathVariable = 'TARGETPROCESS_MASHUPS_PATH';
var mashupsPath = shell.env[mashupsPathVariable];
if (!mashupsPath) {
    throw new Error(`Please define ${mashupsPathVariable} env variable`);
}
var buildPath = path.join(mashupsPath, shell.env.npm_package_name);

shell.rm('-rf', buildPath);
shell.exec(`cross-env NODE_ENV=development webpack --watch --output-path ${buildPath}`);

/**
 * This Webpack loader handles .reaxpress files
 * It splits the file into its route in reaxpress/generated/routes
 * It splits the React component into a file in the src/react/Reaxpress/generated dir
*/

const fs = require('fs');
const path = require('path');

const getFileName = (context, resourcePath) => {
  let fileName = '';

  // get the working dir from the context
  const workingDir = context.split('/').pop();

  // if the absolute path is in the root of the routes folder, it is index.js
  // if the absolute path is not the root, then the working dir is the filename
  if (workingDir === 'routes') {
    fileName = path.basename(resourcePath);
  } else {
    fileName = `${workingDir}.js`;
  }

  return fileName;
}

module.exports = function reaxpressLoader(source) {
  // get a filename
  const fileName = getFileName(this.context, this.resourcePath);
  fs.writeFileSync(`./.log/${fileName}`, source);
};

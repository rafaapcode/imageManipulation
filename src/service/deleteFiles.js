const { unlinkSync, readdir } = require('node:fs');

module.exports = (path) => {
  readdir(path, (err, files) => {
    files.forEach((file) => unlinkSync(`${path}/${file}`));
  });
};

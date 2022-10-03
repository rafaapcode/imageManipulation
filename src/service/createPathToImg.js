const { readdirSync } = require('node:fs');

exports.create = async (path) => {
  const caminho = await readdirSync(path);

  const format = caminho.map((pathFile) => {
    const pathFormat = { path: `${path}\\${pathFile}` };

    return pathFormat;
  });

  return format;
};

const { readdirSync } = require('node:fs');

exports.create = async (path) => {

  const caminho = await readdirSync(path);

  const format = caminho.map(pathFile => {
    return { path: `${path}\\${pathFile}` };
  });

  return format;
}

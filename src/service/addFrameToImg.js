const jimp = require('jimp');

module.exports = ({ res, images, w, h, pathOutput }) => {
  const jimps = [];

  try {

    for (let i = 0; i < images.length; i++) {
      jimps.push(jimp.read(images[i]));
    }

    Promise.all(jimps)
      .then(data => Promise.all(jimps))
      .then(data => {
        const [frame, ...imgs] = data;
        frame.resize(w, h);

        imgs.map((img, indexImg) => {
          img.resize(w, h);

          img.composite(frame, 0, 0);

          img.write(`${pathOutput}/output/image${indexImg}.png`);
        });
      });
  } catch (e) {
    return res.render('error');
  }
};
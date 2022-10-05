const jimp = require('jimp');

module.exports = ({ images, w, h, pathOutput }) => {
  const jimps = [];

  for (let i = 0; i < images.length; i += 1) {
    jimps.push(jimp.read(images[i]));
  }

  Promise.all(jimps)
    .then((data) => {
      console.log(data);
      return Promise.all(jimps);
    })
    .then((data) => {
      const [frame, ...imgs] = data;
      frame.resize(w, h);

      imgs.map((img, indexImg) => {
        img.resize(w, h);

        img.composite(frame, 0, 0);

        img.write(`${pathOutput}/output/image${indexImg}.png`);
        return;
      });
    });
};

import multer from 'multer';
import multerConfig from '../config/multerConfig.js';
import { resolve } from 'node:path';
import deleteFiles from '../service/deleteFiles.js';
import addFrameToImg from '../service/addFrameToImg.js';
import configFrame from '../config/configFrame.js';
const uploads = multer(multerConfig).fields([{ name: 'frame', maxCount: 1 }, { name: 'photo', maxCount: 20 }]);


exports.homePage = (req, res) => {
  res.render('home');
}

exports.convertImg = (req, res) => {


  return uploads(req, res, async error => {
    if (error) {
      res.render('error', { error: error.code });
      return;
    }

    if (!req.body.h || !req.body.w) {
      req.flash('errors', 'The width and height of a frame must be completed !!');
      deleteFiles(resolve(__dirname, '..', 'uploads'));
      req.session.save(() => {
        res.redirect('/');
        return;
      })
      return;
    }

    try {
      const pathOutput = resolve(__dirname, '..');
      const { path: pathFrame } = req.files['frame'][0];
      const images = req.files['photo'].map(({ path }) => path);
      const { w, h } = req.body;
      images.unshift(pathFrame);

      await addFrameToImg(configFrame({images, res, w, h, pathOutput}));
      deleteFiles(resolve(__dirname, '..', 'uploads'));

      res.redirect('/email');
      return;
    } catch (err) {
      res.redirect('/');
      return;
    }
  });
}
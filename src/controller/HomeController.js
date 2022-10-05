import multer from 'multer';
import { resolve } from 'node:path';
import multerConfig from '../config/multerConfig.js';
import deleteFiles from '../service/deleteFiles.js';
import addFrameToImg from '../service/addFrameToImg.js';
import configFrame from '../config/configFrame.js';

const uploads = multer(multerConfig).fields([{ name: 'frame', maxCount: 1 }, { name: 'photo', maxCount: 50 }]);

export function homePage(req, res) {
  res.render('home');
  return;
}

export function convertImg(req, res) {
  uploads(req, res, async (error) => {
    if (error) {
      res.render('error', { error: error.code });
      return;
    }

    if (!req.body.h || !req.body.w) {
      req.flash('errors', 'The width and height of a frame must be completed !!');
      deleteFiles(resolve(__dirname, '..', 'uploads'));
      req.session.save(() => {
        res.redirect('/');
      });
      return;
    }

    try {
      const pathOutput = resolve(__dirname, '..');
      const { path: pathFrame } = req.files.frame[0];
      const images = req.files.photo.map(({ path }) => path);
      const { w, h } = req.body;
      images.unshift(pathFrame);

      await addFrameToImg(configFrame({ images, w, h, pathOutput }));
      deleteFiles(resolve(__dirname, '..', 'uploads'));

      res.redirect('/email');
      return;
    } catch (err) {
      res.redirect('/');
      return;
    }
  });
}

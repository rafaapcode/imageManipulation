import multer from 'multer';
import { resolve } from 'node:path';
import multerConfig from '../config/multerConfig.js';
import deleteFiles from '../service/deleteFiles.js';
import addFrameToImg from '../service/addFrameToImg.js';

const uploads = multer(multerConfig).fields([{ name: 'frame', maxCount: 1 }, { name: 'photo', maxCount: 20 }]);

export function homePage(req, res) {
  res.render('homePage');
}

export function manipulatePhotos(req, res) {
  return uploads(req, res, async (error) => {
    if (error) {
      res.render('error', { error: error.code });
      return;
    }

    if (!req.body.h || !req.body.w) {
      res.render('error');
      deleteFiles(resolve(__dirname, '..', 'uploads'));
      return;
    }

    const pathOutput = resolve(__dirname, '..');
    const { path: pathFrame } = req.files['frame'][0];
    const images = req.files['photo'].map(({ path }) => path);
    const { w, h } = req.body;
    images.unshift(pathFrame);

    const configFrame = {
      images,
      res,
      w: Number(w),
      h: Number(h),
      pathOutput,
    };

    await addFrameToImg(configFrame);
    deleteFiles(resolve(__dirname, '..', 'uploads'));

    res.redirect('/email');
    return;
  });
}

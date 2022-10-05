const multer = require('multer');
const { extname, resolve } = require('path');

module.exports = {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return cb(new multer.MulterError('All the files must be a image !!'));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}${extname(file.originalname)}`);
    },
  }),
};

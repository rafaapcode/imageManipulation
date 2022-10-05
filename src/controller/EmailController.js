const { resolve } = require('node:path');
const { createEmail } = require('../service/createEmail.js');
const deleteFiles = require('../service/deleteFiles.js');

exports.emailPage = (req, res) => res.render('sendemail');

exports.sendEmail = async (req, res) => {
  try {
    const { receiver, subject } = req.body;

    await createEmail(receiver, subject);
    deleteFiles(resolve(__dirname, '..', 'output'));

    return res.redirect('/');
  } catch (err) {
    return res.redirect('/');
  }
};

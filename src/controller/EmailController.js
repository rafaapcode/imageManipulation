const { createEmail } = require('../service/createEmail.js');
const deleteFiles = require('../service/deleteFiles.js');
const { resolve } = require('node:path');

exports.emailPage = (req, res) => {
  res.render('sendemail');
  return;
}

exports.sendEmail = async (req, res) => {
  const { destinatario } = req.body;

  await createEmail(destinatario);
  deleteFiles(resolve(__dirname, '..', 'output'));

  return res.redirect('/');
}
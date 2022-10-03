const nodemailer = require('nodemailer');
const { resolve } = require('node:path');
const emailConfig = require('../config/emailConfig.js');
const { create } = require('./createPathToImg.js');

exports.createEmail = async (toemail) => {
  const transport = nodemailer.createTransport(emailConfig);

  const message = {
    text: 'Fotos Do Projeto',

    subject: 'As fotos feitas',

    from: 'faelcrypt@gmail.com',

    to: [toemail],

    attachments: await create(resolve(__dirname, '..', 'output')),
  };

  await transport.sendMail(message);
};

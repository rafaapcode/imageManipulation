require('dotenv').config();

const nodemailer = require('nodemailer');
const { resolve } = require('node:path');
const emailConfig = require('../config/emailConfig.js');
const { create } = require('./createPathToImg.js');

exports.createEmail = async (toemail, subject) => {
  const transport = nodemailer.createTransport(emailConfig);

  const message = {
    title: 'Photos',

    subject,

    from: process.env.USER,

    to: [toemail],

    attachments: await create(resolve(__dirname, '..', 'output')),
  };

  await transport.sendMail(message);
};

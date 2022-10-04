import { resolve } from 'node:path';
import createEmail from '../service/createEmail.js';
import deleteFiles from '../service/deleteFiles.js';

export function sendEmailPage(req, res) {
  res.render('sendEmail');
}

export async function sendEmail(req, res) {
  const { destinatario } = req.body;

  await createEmail(destinatario);
  deleteFiles(resolve(__dirname, '..', 'output'));

  return res.redirect('/');
}

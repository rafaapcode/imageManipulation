import Router from 'express';
import { sendEmailPage, sendEmail } from '../controllers/SendEmailController';

const sendEmailRoute = new Router();

sendEmailRoute.get('/', sendEmailPage);
sendEmailRoute.post('/sendemail', sendEmail);

export default sendEmailRoute;

import Router from 'express';
import { sendEmail, emailPage } from '../controller/EmailController.js';

const emailRoute = new Router();

emailRoute.get('/', emailPage);
emailRoute.post('/sendemail', sendEmail);

export default emailRoute;
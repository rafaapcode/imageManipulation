import Router from 'express';
import { loginPage } from '../controllers/LoginPageController.js';

const loginPageRoute = new Router();

loginPageRoute.get('/', loginPage);

export default loginPageRoute;
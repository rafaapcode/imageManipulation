import Router from 'express';
import { homePage, convertImg } from '../controller/HomeController.js';

const homeRoute = new Router();

homeRoute.get('/', homePage);
homeRoute.post('/convertphotos', convertImg);

export default homeRoute;

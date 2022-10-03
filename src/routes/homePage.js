import Router from 'express';
import { homePage, manipulatePhotos } from '../controllers/HomePageController.js';

const homePageRoute = new Router();

homePageRoute.get('/', homePage);
homePageRoute.post('/convertphotos', manipulatePhotos);

export default homePageRoute;

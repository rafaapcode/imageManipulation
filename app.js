import express from 'express';
import { join } from 'node:path';
import homePageRoute from './src/routes/homePage.js';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.routes();
    this.views();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.set('port', 5000);
  }

  routes() {
    this.app.use('/', homePageRoute);
  }

  views() {
    this.app.set('views', join(__dirname, 'views'));
    this.app.set('view engine', 'ejs');
  }
}

export default new App().app;

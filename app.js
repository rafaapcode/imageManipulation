import express from 'express';
import { join } from 'node:path';
import loginPageRoute from './src/routes/loginPage';
import flash from 'connect-flash';
import session from 'express-session';
import sessioConfig from './src/config/sessionConfig.js';

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
    this.app.use(flash());
    this.app.use(session(sessioConfig));
    this.app.set('port', 5000);
  }

  routes() {
    this.app.use('/', loginPageRoute);
  }

  views() {
    this.app.set('views', join(__dirname, 'views'));
    this.app.set('view engine', 'ejs');
  }
}

export default new App().app;
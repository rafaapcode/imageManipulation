import express from 'express';
import { join } from 'node:path';
import homeRoute from './src/routes/homePageRoute';;
import emailRoute from './src/routes/sendEmailRoute';
import flash from 'connect-flash';
import session from 'express-session';
import sessionConfig from './src/config/sessionConfig.js';
import messages from './src/middlewares/messages.js';

class App {
  constructor() {
    this.app = express();
    this.middleware();
    this.views();
    this.routes();
  }

  middleware() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(flash());
    this.app.use(session(sessionConfig));
    this.app.use(messages);
    this.app.set('port', 5000);
  }

  routes() {
    this.app.use('/', homeRoute);
    this.app.use('/email', emailRoute);
  }

  views() {
    this.app.set('views', join(__dirname, 'views'));
    this.app.set('view engine', 'ejs');
  }
}

export default new App().app;
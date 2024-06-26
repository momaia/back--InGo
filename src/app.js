import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App {

  constructor() {
    this.server = express();

    mongoose.connect('mongodb+srv://maiamateusotavio:vd6TOKjCxJJXCeQ5@ingodevmongo.byuri89.mongodb.net/?retryWrites=true&w=majority&appName=InGoDevMongo');

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
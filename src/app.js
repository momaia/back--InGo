import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes";

class App {
  constructor() {
    this.server = express();

    mongoose.connect(
      "mongodb+srv://maiamateusotavio:1Q7mdcHIpMQUJOQ9@ingodevmongo.byuri89.mongodb.net/?retryWrites=true&w=majority&appName=InGoDevMongo"
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors());

    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;

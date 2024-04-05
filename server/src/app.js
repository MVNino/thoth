import "reflect-metadata";
import "dotenv/config";
import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import hpp from "hpp";
import morgan from "morgan";
import { stream } from "./utils/logger.js";
import { connectToMongoDb } from "./utils/database.js";
import { ORIGIN, CREDENTIALS, LOG_FORMAT } from './config/app.js';

export class App {
  constructor(routes) {
    this.app = express();
    this.env = process.env.NODE_ENV;
    this.port = +process.env.PORT;

    this.connectToDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  listen() {
    this.app.listen(this.port, () => {
      console.info(`=================================`);
      console.info(`======= ENV: ${this.env} =======`);
      console.info(`🚀 App listening on the port ${this.port}`);
      console.info(`=================================`);
    });
  }

  async connectToDatabase() {
    await connectToMongoDb();
  }

  initializeMiddlewares() {
    this.app.use(morgan(LOG_FORMAT, { stream }));
    this.app.use(cors({ origin: ORIGIN, credentials: CREDENTIALS }));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }

  initializeRoutes(routes) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  getServer() {
    return this.app;
  }
}

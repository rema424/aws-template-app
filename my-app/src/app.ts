/**
 * Module dependencies.
 */
import * as bodyParser from 'body-parser';
import express from 'express';
import * as MainController from './controllers/MainController';

/**
 *  Express app
 */
export class MyExpress {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  /**
   * Express configuration.
   */
  private config(): void {
    // Support application/json.
    this.app.use(bodyParser.json());

    // Support application/x-www-form-urlencoded post data.
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  /**
   * App routes.
   * app.METHOD(PATH, HANDLER)
   */
  private routes(): void {
    this.app.get('/', MainController.index);
    this.app.get('/:userId', MainController.get);
  }
}

/**
 *  Export your Express configuration so that it can be consumed by the Server or the Lambda handler
 */
// export const app: express.Application = new App().app;

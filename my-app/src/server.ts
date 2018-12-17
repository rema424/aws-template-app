/**
 * Module dependencies.
 */
import { MyExpress } from './framework/app';
import expressListEndpoints from 'express-list-endpoints';
import express from 'express';
import { logger } from './lib/logger';

// Get port from environment.
const host: string = process.env.HOST || '0.0.0.0';
const port: number = Number(process.env.PORT) || 3000;
const env: string = process.env.NODE_ENV || 'a';
logger.info(env);
logger.debug('log from server');

// Initialize MyExpress App.
const app: express.Application = new MyExpress().app;

// Listen the server.
export const server = app.listen(port, host, () => {
  console.log(expressListEndpoints(app));
  console.log(`Server listening on http://${host}:${port}`);
  console.log('Press CTRL-C to stop');
});

/**
 * Module dependencies.
 */
import { MyExpress } from './app';
import expressListEndpoints from 'express-list-endpoints';
import express from 'express';

/**
 * Entry point.
 */
export function main() {
  // Get port from environment.
  const host: string = process.env.HOST || '0.0.0.0';
  const port: number = Number(process.env.PORT) || 3000;

  // Initialize MyExpress App.
  const app: express.Application = new MyExpress().app;

  // Listen the server.
  app.listen(port, host, () => {
    console.log(expressListEndpoints(app));
    console.log(`Server listening on http://${host}:${port}`);
    console.log('Press CTRL-C to stop');
  });
}

main();

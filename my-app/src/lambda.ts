/**
 * Module dependencies.
 */
// tslint:disable-next-line:no-implicit-dependencies
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import awsServerlessExpress from 'aws-serverless-express';
import { Server } from 'http';
import { MyExpress } from './app';
import express from 'express';

/**
 * Initialize Aws Serverless Express Server.
 */
const app: express.Application = new MyExpress().app;
const server: Server = awsServerlessExpress.createServer(app);

/**
 * Adapt Express Application to Lambda.
 */
export function handler(event: APIGatewayProxyEvent, context: Context): Server {
  return awsServerlessExpress.proxy(server, event, context);
}

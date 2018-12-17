import { Request, Response } from 'express';
import { logger } from '../lib/logger';

/**
 * GET /
 * @param req
 * @param res
 */
export function index(req: Request, res: Response): void {
  logger.info('log from controller');
  res.status(200).send({ message: 'GET request successful!!' });
}

/**
 * GET /:userId
 * @param req
 * @param res
 */
export function get(req: Request, res: Response): void {
  const userId: string = req.params.userId || '';
  res.status(200).send({ message: `GET user: ${userId}` });
}

import { Request, Response } from 'express';

/**
 * GET /
 * @param req
 * @param res
 */
export function index(req: Request, res: Response): void {
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

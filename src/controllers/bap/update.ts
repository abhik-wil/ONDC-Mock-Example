import {NextFunction, Request, Response} from 'express';
import {sendAck} from '../../utils/sendResponses.ts';

export const updateController = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  // TODO: ADD Request Parsing Logic
  return sendAck(res);
};

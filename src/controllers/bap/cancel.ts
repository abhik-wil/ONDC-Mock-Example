import {NextFunction, Request, Response} from 'express';
import {sendAck} from '../../utils/sendResponses';

export const cancelController = (
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  // TODO: ADD Request Parsing Logic
  return sendAck(res);
};

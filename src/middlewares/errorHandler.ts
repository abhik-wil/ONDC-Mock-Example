import {NextFunction, Request, Response, Router} from 'express';
import {AxiosError} from 'axios';
import {sendNack} from '../utils/sendResponses.ts';

export const globalErrorHandler = (
  err: Error,
  _req: Request,
  res: Response
) => {
  return sendNack(
    res,
    {
      message: err instanceof AxiosError ? err.response : err.message,
    },
    500
  );
};

export const errorHandlingWrapper =
  (router: Router) => (req: Request, res: Response, next: NextFunction) => {
    try {
      router(req, res, next);
    } catch (error) {
      return next(error);
    }
  };

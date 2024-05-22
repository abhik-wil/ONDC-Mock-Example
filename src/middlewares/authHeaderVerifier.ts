import {NextFunction, Request, Response} from 'express';
import {verifyHeader} from '../utils';
import {sendNack} from '../utils/sendResponses.ts';

export const authValidatorMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const auth_header = req.headers['authorization'] || '';

    const verified = await verifyHeader(auth_header, req?.rawBody!.toString());

    if (!verified) {
      return sendNack(
        res,
        {
          message: 'Auth Header Verification failed',
        },
        401
      );
    }
    return next();
  } catch (err) {
    return sendNack(
      res,
      {
        message: 'Authentication failed',
      },
      401
    );
  }
};

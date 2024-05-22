import {NextFunction, Request, Response} from 'express';

export const requestParser = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!req.body) return next();
  try {
    if (req.headers['content-type'] === 'application/json') {
      req.rawBody = req.body;
      req.body = JSON.parse(req.body.toString());
      // console.log("REQ BODY PARSED", Object.keys(req.body));

      return next();
    }
  } catch (error) {
    if (error instanceof SyntaxError)
      return res.status(400).json({
        message: {
          ack: {
            status: 'NACK',
          },
        },
        error: {
          type: 'JSON-SCHEMA-ERROR',
          code: '50009',
          message: error.message,
        },
      });
    return next(error);
  }
};

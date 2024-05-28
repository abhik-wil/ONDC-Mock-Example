// types/express.d.ts
import * as express from 'express';

export {};

declare module 'express-serve-static-core' {
  interface Request {
    rawBody?: Buffer;
  }
}

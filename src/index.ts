import express from 'express';
import cors from 'cors';
import {config} from './utils';
import {bapRouter} from './controllers';
import {
  authValidatorMiddleware,
  errorHandlingWrapper,
  globalErrorHandler,
  requestParser,
} from './middlewares';

const app = express();

app.use(cors());
app.use(express.raw({type: 'application/json', limit: '1mb'}));
app.use(requestParser);
app.use(authValidatorMiddleware);

app.use('/bap', errorHandlingWrapper(bapRouter));
app.use(globalErrorHandler);

app.listen(config.port, () => {
  console.log(`[server]: Server is running at PORT: ${config.port}`);
});

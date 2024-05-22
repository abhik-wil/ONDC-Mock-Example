import express from 'express';
import cors from 'cors';
// import {config} from './utils';
import {bapRouter, bppRouter} from './controllers/index.ts';
import {
  errorHandlingWrapper,
  globalErrorHandler,
  requestParser,
} from './middlewares/index.ts';

const app = express();

app.use(cors());
app.use(express.raw({type: 'application/json', limit: '1mb'}));
app.use(requestParser);

app.use('/bpp', errorHandlingWrapper(bppRouter));
app.use('/bap', errorHandlingWrapper(bapRouter));
app.use(globalErrorHandler);

app.listen(3000, () => {
  console.log('PROCESS ENV', process.env.PORT);
  console.log(`[server]: Server is running at PORT: ${3000}`);
});

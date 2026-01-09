import { appController } from './controllers/app.controller.js';
import { errorMiddleware } from './middlewares/error.middleware.js';
import { config } from './config.js';
import express from 'express';
import cors from 'cors';
import * as Sentry from '@sentry/node';

const app = express();
const { port } = config;

// Initialize Sentry
Sentry.init({
  dsn: 'https://js-d6.sentry-cdn.com/50e8732742a10f00c882baaa64d50b1.min.js',
  tracesSampleRate: 1.0,
  environment: process.env.NODE_ENV || 'development',
});

// Sentry request handler must be the first middleware
app.use(Sentry.Handlers.requestHandler());

(async () => {
  app.use(cors());

app.use(appController);
// Sentry error handler must be before any other error middleware
app.use(Sentry.Handlers.errorHandler());
app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`Listening on ${port}`);
});
})();

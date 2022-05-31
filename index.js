import express from 'express';
import bodyParser from 'body-parser';
import { router } from './routes/index.js';

(() => {
  const app = express();
  const port = 5000;

  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(router);

  app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
  });
})();

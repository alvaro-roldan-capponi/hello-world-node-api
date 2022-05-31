import * as express from 'express';
import { IndexController } from '../controllers/index.js';

const router = express.Router();

router.get('/healthz', [], IndexController.healthzCheck);
router.get('/:message', [], IndexController.responseTest);
router.get('/', [], IndexController.responseRoot);

export { router };

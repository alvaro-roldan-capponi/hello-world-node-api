import { generateSuccessResponse } from '../utils/index.js';
import moment from 'moment';

export class IndexController {
  static healthzCheck = async (_req, res, next) => {
    try {
      const data = generateSuccessResponse({ timestamp: moment().toString() });
      res.json(data);
    } catch (error) {
      next(error);
    }
  };

  static responseTest = async (_req, res, next) => {
    try {
      const data = generateSuccessResponse({
        "uri": _req.params.message
      }
      );
      res.json(data);
    } catch (error) {
      next(error);
    }
  };

  static responseRoot = async (_req, res, next) => {
    try {
      const data = 'Hello from the api';
      res.json(data);
    } catch (error) {
      next(error);
    }
  };
}

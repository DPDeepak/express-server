import * as express from 'express';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { validationHandler } from '../../libs/routes/validationHandler';
import trainee from './Controller';
import { validation } from './validation';
const traineeRouter = express.Router();

traineeRouter.get('/', authMiddleWare('trainee', 'read'), validationHandler(validation.get), trainee.get);
traineeRouter.post('/', authMiddleWare('trainee', 'write'), validationHandler(validation.create), trainee.create);
traineeRouter.put('/', authMiddleWare('trainee', 'update'), validationHandler(validation.update), trainee.put);
traineeRouter.delete('/', authMiddleWare('trainee', 'delete'), validationHandler(validation.delete), trainee.delete);

export default traineeRouter;

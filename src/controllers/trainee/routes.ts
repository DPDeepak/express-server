import * as express from 'express';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { validationHandler } from '../../libs/routes/validationHandler';
import trainee from './Controller';
import { validation } from './validation';
const traineeRouter = express.Router();

traineeRouter.get('/', validationHandler(validation.get), trainee.get);
traineeRouter.post('/', authMiddleWare('java', 'read'), trainee.create);
// traineeRouter.post('/', validationHandler(validation.create),trainee.create)
traineeRouter.put('/',  validationHandler(validation.update), trainee.put);
traineeRouter.delete('/', validationHandler(validation.delete), trainee.delete);

export default traineeRouter;

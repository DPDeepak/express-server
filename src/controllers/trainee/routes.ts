import * as express from 'express'
import trainee from './Controller'
import { validation } from './validation';
import { validationHandler } from '../../libs/routes/validationHandler'
const traineeRouter = express.Router();
traineeRouter.get('/', validationHandler(validation.get), trainee.get)
traineeRouter.post('/', validationHandler(validation.create),trainee.post)
traineeRouter.put('/', trainee.put)
traineeRouter.delete('/', trainee.delete)
export default traineeRouter;
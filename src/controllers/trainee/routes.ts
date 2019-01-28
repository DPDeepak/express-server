import * as express from 'express'
import trainee from './Controller'
import { validation } from './validation';
import { validationHandler } from '../../libs/routes/validationHandler'
const traineeRouter = express.Router();
traineeRouter.get('/', validationHandler(validation.get))
traineeRouter.post('/', validationHandler(validation.create))
traineeRouter.put('/',  validationHandler(validation.update))
traineeRouter.delete('/', validationHandler(validation.delete))
export default traineeRouter;
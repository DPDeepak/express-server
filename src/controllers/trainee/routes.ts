import * as express from 'express'
import trainee from './Controller'
import { validation } from './validation';
import { validationHandler } from '../../libs/routes/validationHandler'
const traineeRouter = express.Router();
traineeRouter.get('/', validationHandler(validation.get),trainee.get)
traineeRouter.post('/', validationHandler(validation.create),trainee.create)
traineeRouter.put('/',  validationHandler(validation.update),trainee.put)
traineeRouter.delete('/', validationHandler(validation.delete),trainee.delete)
export default traineeRouter;
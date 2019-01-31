import * as express from 'express'
import trainee from './Controller'
import { validation } from './validation';
import { validationHandler } from '../../libs/routes/validationHandler'
import authMiddleWare from '../../libs/routes/authMiddleWare';
const traineeRouter = express.Router();

traineeRouter.get('/', validationHandler(validation.get),trainee.get)
traineeRouter.post('/', authMiddleWare('java','read'),trainee.create)
//traineeRouter.post('/', validationHandler(validation.create),trainee.create)
traineeRouter.put('/',  validationHandler(validation.update),trainee.put)
traineeRouter.delete('/', validationHandler(validation.delete),trainee.delete)

export default traineeRouter;
import * as express from 'express'
import trainee from './Controller'
const traineeRouter = express.Router();
traineeRouter.get('/', trainee.get)
traineeRouter.post('/', trainee.post)
traineeRouter.put('/', trainee.put)
traineeRouter.delete('/', trainee.delete)
export default traineeRouter;
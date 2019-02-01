import * as express from 'express'
import user from './Controller'
import { validation } from '../trainee/validation';
import { validationHandler } from '../../libs/routes/validationHandler'
import authMiddleWare from '../../libs/routes/authMiddleWare';
const userRouter = express.Router();

userRouter.get('/', authMiddleWare('node','read'),user.get)
userRouter.post('/', authMiddleWare('java','write'),user.create)
userRouter.put('/',  authMiddleWare('node','read'),user.put)
userRouter.delete('/', authMiddleWare('java','delete'),user.delete)

export default userRouter;
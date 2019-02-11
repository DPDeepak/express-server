import * as express from 'express';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { validationHandler } from '../../libs/routes/validationHandler';
import { validation } from '../trainee/validation';
import user from './Controller';
const userRouter = express.Router();

userRouter.get('/', authMiddleWare('trainee', 'read'), validationHandler(validation.getData), user.getData);
userRouter.post('/', authMiddleWare('trainee', 'write'), validationHandler(validation.create), user.create);
userRouter.put('/',  authMiddleWare('trainee', 'update'), validationHandler(validation.update), user.put);
userRouter.delete('/', authMiddleWare('trainee', 'delete'), validationHandler(validation.delete), user.delete);

export default userRouter;

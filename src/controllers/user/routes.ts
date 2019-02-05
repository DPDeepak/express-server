import * as express from 'express';
import authMiddleWare from '../../libs/routes/authMiddleWare';
import { validationHandler } from '../../libs/routes/validationHandler';
import { validation } from '../trainee/validation';
import user from './Controller';
const userRouter = express.Router();

userRouter.get('/', authMiddleWare('node', 'read'), user.get);
userRouter.post('/', authMiddleWare('java', 'write'), user.create);
userRouter.put('/',  authMiddleWare('traineeModule', 'update'), user.put);
userRouter.delete('/', authMiddleWare('java', 'delete'), user.delete);

export default userRouter;

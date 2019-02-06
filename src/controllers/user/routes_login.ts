import * as express from 'express';
import user from './Controller';
import { validationHandler } from '../../libs/routes/validationHandler';
import { validation } from '../trainee/validation';

const userLoginRouter = express.Router();
console.log('---------routes');

userLoginRouter.post('/', validationHandler(validation.create), user.verifyLogin)
export default userLoginRouter;

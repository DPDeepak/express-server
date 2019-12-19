import * as express from 'express';
import { validationHandler } from '../../libs/routes/validationHandler';
import { validation } from '../trainee/validation';
import user from './Controller';

const userLoginRouter = express.Router();

userLoginRouter.post('/', validationHandler(validation.create), user.verifyLogin);
export default userLoginRouter;

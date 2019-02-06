import * as express from 'express';
import { traineeRouter } from './controllers/trainee/index';
import { userLoginRouter, userRouter } from './controllers/user/index';

const router = express.Router();
console.log('000000000000000000000000routerrrr');

router
    .use('/trainee', traineeRouter)
    .use('/user', userRouter)
    .use('/userLogin', userLoginRouter);

export default router;

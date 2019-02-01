import * as express from 'express'
import { traineeRouter } from './controllers/trainee/index'
 import {userRouter } from './controllers/user/index'

const router = express.Router();

router
    .use('/trainee', traineeRouter)
    .use('/user',userRouter)
export default router;
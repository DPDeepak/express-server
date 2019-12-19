import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs/routes/successHandler';

class TraineeController {
    public get(req, res) {

        res.send(successHandler('Request Done', 200, 'data retieved'));
    }
   public create(req: Request, res: Response, next: NextFunction) {
        res.send(successHandler('successfully posted', 200, 'data is correct'));
    }
    public put(req: Request, res: Response, next: NextFunction) {

            res.send(successHandler('succesfully updated', 200, 'data is coorect'));

    }
    public delete(req: Request, res: Response, next: NextFunction) {

            res.send(successHandler('succesfully deleted', 200, 'data cannot be retrived now'));

    }

}
export default new TraineeController();

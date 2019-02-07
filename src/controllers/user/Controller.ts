import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs/routes/successHandler';
import UserRepository from '../../repositories/user/UserRepository';

const repository = new UserRepository();
class UserController {

    public get(req, res) {
        const { name, email, role } = req.body.data;
        repository.read({ email: req.query.email }).then((data) => {
            res.send(successHandler('Request Done', 200, data))
        }).catch((err) => { throw err })
  
        const all = {
            email,
            name,
            role,
        };
        // res.send(successHandler('Request Done', 200, all));
    }
    public create(req: Request, res: Response, next: NextFunction) {
        const data = req.query;
        repository.create(data).then((response) => {

            res.send(successHandler('successfully posted', 200, data));
        }).catch((err) => { throw err; });
    }
    public put(req: Request, res: Response, next: NextFunction) {
        const email = req.query.email;
        const newName = req.query.newName;

        repository.update(email, newName).then((data1) => {
            res.send(successHandler('successfully posted', 200, data1));
        }).catch((err) => { throw err; });
    }
    public delete(req: Request, res: Response, next: NextFunction) {
        const data = { name: req.query.name };
        repository.remove(data).then((data1) => {
            res.send(successHandler('succesfully deleted', 200, data1));
        }).catch((err) => { throw err; });

    }

}

export default new UserController();

import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs/routes/successHandler';
import UserRepository from '../../repositories/user/UserRepository';

const repository = new UserRepository();
class UserController {
    public async get(req, res) {
        try {
            const result = await repository.read({ originalID: req.query.originalID });
            if (result) {
                res.send(successHandler('Request Done', 200, result));
            }
            else {
                throw new Error('Data does not exist')
            }
        }
        catch (err) {
            throw new Error('Cannot fetch data')
        }
    }
    public create(req: Request, res: Response, next: NextFunction) {
        const data = req.query;
        repository.create(data).then((response) => {

            res.send(successHandler('successfully posted', 200, data));
        }).catch((err) => { throw err; });
    }
    public async verifyLogin(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            console.log(email, '----------', password);
            const token = await repository.verifyLogin(email, password)
            console.log('-------32---', token);

            res.send(successHandler('successfully posted', 200, token));
        } catch (err) {
            next({ error: 'error in login verification' })
        }
    }
    public put(req: Request, res: Response, next: NextFunction) {
        const originalID = req.body.originalID;
        const dataToUpdate = req.body.dataToUpdate;

        repository.update(originalID, dataToUpdate).then((data1) => {
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

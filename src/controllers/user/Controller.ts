import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs/routes/successHandler';
import UserRepository from '../../repositories/user/UserRepository';

const repository = new UserRepository();
class UserController {
    public async get(req, res, next) {
        try {
            const result = await repository.read({ originalID: req.query.originalID });
            if (result) {
                res.send(successHandler('Request Done', 200, result));
            }
            else {
                const err = 'Data does not exist'
                throw err
            }
        }
        catch (err) {
            next({ error: err })
        }
    }
    public async getData(req, res, next) {
        try {

            let { skip = 5, limit = 7 } = req.query;
            const result = await repository.readAll(skip, limit);
            if (result) {
                res.send(successHandler('Request Done', 200, result));
            }
            else {
                const err = 'Data does not exist'

                throw err
            }
        }
        catch (err) {
            next({ error: err })
        }
    }
    public async create(req: Request, res: Response, next: NextFunction) {
        const data = req.query;
        try {
            if (Object.keys(data).length) {
                await repository.create(data)
                res.send(successHandler('successfully posted', 200, data));
            }
            else {
                const err = 'Data does not exist'

                throw err
            }
        }
        catch (err) {
            return next({ error: err })
        }
    }
    public async verifyLogin(req: Request, res: Response, next: NextFunction) {
        try {
            const { email, password } = req.body;
            const token = await repository.verifyLogin(email, password)
            if (token) {
                res.send(successHandler('successfully generated token', 200, token));
            }
            else {
                const err = 'Data does not exist'
                throw err
            }
        } catch (err) {
            next({ error: err })
        }
    }
    public async put(req: Request, res: Response, next: NextFunction) {
        try {

            const originalID = req.body.originalID;
            const dataToUpdate = req.body.dataToUpdate;
            if (Object.keys(dataToUpdate).length) {
                await repository.update(originalID, dataToUpdate)
                res.send(successHandler('successfully updated', 200, 'Data saved in database'));
            }
            else {
                const err = 'Data does not exist'

                throw err
            }
        }
        catch (err) {
            next({ error: err })
        }
    }
    public async delete(req: Request, res: Response, next: NextFunction) {
        try {

            const originalID = req.query.originalID;
            if (Object.keys(originalID).length) {
                const result = await repository.remove(originalID)
                res.send(successHandler('successfully deleted', 200, result));
            }
            else {
                const err = 'Data does not exist'

                throw err
            }
        }
        catch (err) {
            next({ error: err })
        }
    }
}

export default new UserController();

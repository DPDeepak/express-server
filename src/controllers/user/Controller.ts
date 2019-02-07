import { NextFunction, Request, Response } from 'express';
import { successHandler } from '../../libs/routes/successHandler';
import UserRepository from '../../repositories/user/UserRepository';
import { runInNewContext } from 'vm';

const repository = new UserRepository();
class UserController {
   // try {
    public get(req, res) {
        // repository.read({ _id: req.query.id }).then((data) => {
        //     res.send(successHandler('Request Done', 200, data))
        // }).catch((err) => { throw err })
        const { name, email, _id, role } = req.body.data;
        const all = {
            _id,
            email,
            name,
            role,
        };
        res.send(successHandler('Request Done', 200, all));
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
       }catch(err) {
           next({error:'error in login verification'})
       }
    }
    public put(req: Request, res: Response, next: NextFunction) {
        const originalID = req.body.originalID;
        const dataToUpdate = req.body.dataToUpdate;

        repository.update(originalID,dataToUpdate).then((data1) => {
            res.send(successHandler('successfully posted', 200, data1));
        }).catch((err) => { throw err; });
    }
    public delete (req: Request, res: Response, next: NextFunction) {
        const data = { name: req.query.name };
        repository.remove(data).then((data1) => {
            res.send(successHandler('succesfully deleted', 200, data1));
        }).catch((err) => { throw err; });
    }
//}
// catch (err) {
//     next({ error: err })
// }

}

export default new UserController();

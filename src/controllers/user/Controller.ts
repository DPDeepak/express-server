import { Request, Response, NextFunction } from 'express'
import { successHandler } from '../../libs/routes/successHandler'
import UserRepository from '../../repositories/user/UserRepository';

const repository = new UserRepository()
class UserController {

    get(req, res) {
        // repository.read({ _id: req.query.id }).then((data) => {
        //     res.send(successHandler('Request Done', 200, data))
        // }).catch((err) => { throw err })
        const { name , email, _id, role } = req.body.data
        const all = {
            name: name ,
            email: email, 
            _id: _id,
             role : role
        }
        res.send(successHandler('Request Done', 200, all))
        console.log('data fetched');
    }
    create(req: Request, res: Response, next: NextFunction) {
        const data = req.query;
        repository.create(data).then((data) => {
            console.log(data, '----------------------');

            res.send(successHandler('successfully posted', 200, data));
        }).catch((err) => { throw err })
    }
    put(req: Request, res: Response, next: NextFunction) {
        const data = req.query.oldName;
        const data2 = req.query.newName;
        console.log(data, '----------------------');

        repository.update(data, data2).then((data) => {
            res.send(successHandler('successfully posted', 200, 'updated'));
        }).catch((err) => { throw err })
    }
    delete(req: Request, res: Response, next: NextFunction) {
        const data= {name: req.query.name}
        repository.remove(data).then((data) => {
            res.send(successHandler('succesfully deleted', 200, data))
        }).catch((err) => { throw err })


    }

}

export default new UserController;
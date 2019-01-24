import { Request, Response, NextFunction } from 'express'
import { successHandler } from '../../libs/routes/successHandler'

class TraineeController {
    get(req, res) {
        const data = [
            {
                name: 'trainee'
            },
            {
                name: 'trainee2'
            }
        ]
        res.send(successHandler('Request Done', 200, data))
    }
    post(req: Request, res: Response, next: NextFunction) {
        const { name, id } = req.body
        if (name && id)
            res.send(successHandler(name, id, 'successfully posted'));
        else
            next({ error: "Name or id missed" })
    }
    put(req: Request, res: Response, next: NextFunction) {
        const data = {
            name: 'deepak',
            id: '25'
        }
        const { name, id } = req.body
        if (id == data.id) {
            data.name = name
            res.send(successHandler(data.name, id, 'succesfully updated'))
        }
        else
            next({ error: 'Id not Matched' })
    }
    delete(req: Request, res: Response, next: NextFunction) {
        const data = {
            name: 'deepak',
            id: '25'
        }
        const { id } = req.body
        if (id == data.id) {
            res.send(successHandler(data.name, id, 'succesfully deleted'))
        }
        else {
            next({ error: 'Id not matched' })
        }
    }

}
export default new TraineeController()
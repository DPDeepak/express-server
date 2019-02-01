import * as jwt from 'jsonwebtoken'
import hasPermission from './hasPermission'
import { successHandler } from './successHandler';
import UserRepository from '../../repositories/user/UserRepository';
export default function (module: string, permissionType: string) {
    return (req, res, next) => {
        const token = req.headers['authorization']
        const payload = jwt.verify(token, process.env.KEY)
        const role = payload.role
        req.body.data=payload
        console.log(role);
        if(payload._id) {
            const repository = new UserRepository()
            repository.read({_id:payload._id}).then(res=>{
                if (role) {
                    if (hasPermission(module, role, permissionType)) {
                        next()
                    }
                    else
                        next({ error: 'Permission does not exist' })
                }
            })
        }
       
    }
}
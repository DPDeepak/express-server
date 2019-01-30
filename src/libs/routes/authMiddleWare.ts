import * as jwt from 'jsonwebtoken'
import hasPermission from './hasPermission'
import { successHandler } from './successHandler';
export default function (module:string, permissionType:string) {
    return (req, res, next) => {
        console.log('-------6-------', req.headers);
    const token = req.headers['authorization']
           console.log("inside ", token);
           
    const payload = jwt.verify(token, process.env.KEY)
            const role = payload.role
            console.log(role);
            console.log(hasPermission(module, role, permissionType));
            
            if (hasPermission(module, role, permissionType)) {
                next()
            }
            else
                next({ error: 'Permission does not exist' })

            }
        }
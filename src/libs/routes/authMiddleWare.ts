import * as jwt from 'jsonwebtoken'
import hasPermission from './hasPermission'
import { successHandler } from './successHandler';
export default function (module:string, permissionType:string) {
    return (req, res, next) => {
    const token = req.headers['authorization']
    const payload = jwt.verify(token, process.env.KEY)
            const role = payload.role
            if (hasPermission(module, role, permissionType)) {
                next()
            }
            else
                next({ error: 'Permission does not exist' })

            }
        }
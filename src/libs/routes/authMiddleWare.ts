import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './hasPermission';
import { successHandler } from './successHandler';
export default function(module: string, permissionType: string) {
    return (req, res, next) => {
        try {
            const token = req.headers.authorization;
            const payload = jwt.verify(token, process.env.KEY);
            const role = payload.role;
            if (role) {
                if (hasPermission(module, role, permissionType)) {
                    next();
                }
                else {
                    next({ error: 'Permission does not exist' });
                }
            }
            else {
                next({ error: 'No role found in Token' });
            }
        }
        catch (err) {
            next({ error: 'Authentication failed' });
        }
    };
}

import * as jwt from 'jsonwebtoken';
import UserRepository from '../../repositories/user/UserRepository';
import hasPermission from './hasPermission';
import { successHandler } from './successHandler';
export default function (module: string, permissionType: string) {
    return (req, res, next) => {
        const token = req.headers.authorization;
        const payload = jwt.verify(token, process.env.KEY);
        const role = payload.role;
        req.body.data = payload;
        if (payload._id) {
            const repository = new UserRepository();
            repository.read({ _id: payload._id }).then((res) => {
                console.log(res);
                const val = res[1].role;
                console.log(val, '-------------------------------------');

                if (val) {
                    if (hasPermission(module, val, permissionType)) {
                        next();
                    }
                    else {
                        next({ error: 'Permission does not exist' });
                    }
                }
            });
        }

    };
}

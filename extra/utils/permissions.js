import { permissions} from '../constants'
export default function hasPermission(moduleName, role, permissionType) {
    if (permissions[moduleName]&&permissions[moduleName][permissionType].includes(role)) {
        console.log('true');
    }
    else
        console.log('false');
}  
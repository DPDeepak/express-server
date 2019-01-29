import { permissions, head_trainer, trainee, trainer } from '../constants'

const hasPermission = function (moduleName: string, role: string, permissionType: string) {

    if ((permissions[moduleName]['all' as string].includes(role) && permissions[moduleName][permissionType])) {
        // console.log('true');
        return true;
    }
    else if (permissions[moduleName][permissionType].includes(role)) {
        // console.log('true');
        return true;
    }
    else {
        return false;
        // console.log('false');
    }
}

export default hasPermission
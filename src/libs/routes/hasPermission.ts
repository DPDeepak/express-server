import { headTrainer, permissions, trainee, trainer } from '../constants';

function hasPermission(moduleName: string, role: string, permissionType: string) {
    if ((permissions[moduleName]['all' as string].includes(role) && permissions[moduleName][permissionType])) {
        console.log('permision Granted');
        return true;
    }
    else if (permissions[moduleName][permissionType].includes(role)) {
        console.log('permision Granted');
        return true;
    }
    else {

        console.log('permision not Granted');
        return false;
    }
};

export default hasPermission;

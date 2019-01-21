import { permissions, head_trainer,trainee,trainer } from '../constants'

export default function hasPermission(moduleName: string, role: string, permissionType: string) {

    if ((permissions[moduleName]['all' as string].includes(role) && permissions[moduleName][permissionType])) {
        console.log('true');
    }
    else if(permissions[moduleName][permissionType].includes(role))
    console.log('true');
    
    else
    console.log('false');
       
}  
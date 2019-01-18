const permissions = {
    'javascript': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer'],
        delete: [],
    },
    'node': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer', 'trainee'],
        delete: ['head-trainer'],
    },
    'java': {
        all: ['head-trainer'],
        read: ['trainee', 'trainer'],
        write: ['trainer', 'trainee'],
        delete: ['head-trainer'],
    }
}

function hasPermission(moduleName, role, permissionType) {
    if (permissions[moduleName]&&permissions[moduleName][permissionType].includes(role)) {
        console.log('true');
    }
    else
        console.log('false');
}

hasPermission('node', 'head-trainer', 'all')
hasPermission('java', 'trainer', 'read')
hasPermission('javascript', 'trainer', 'all')
hasPermission('java', 'trainer', 'write')
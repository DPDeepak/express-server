const trainee = 'trainee'
const trainer = 'trainer'
const head_trainer = 'head_trainer'

const permissions = {
    'javascript': {
        all: [head_trainer],
        read: [trainee, trainer],
        write: [trainer],
        delete: [],
    },
    'node': {
        all: [head_trainer], 
        read: [trainee, trainer],
        write: [trainer, trainee],
        delete: [head_trainer],
    },
    'java': {
        all: [head_trainer],
        read: [trainee, trainer],
        write: [trainer, trainee],
        delete: [head_trainer],
    }
}

export{permissions,trainee,trainer,head_trainer}
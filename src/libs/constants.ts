import { IPermission } from './interface';

const trainee = 'trainee';
const trainer = 'trainer';
const headTrainer = 'headTrainer';

const permissions: IPermission = {
    java: {
        all: [headTrainer],
         delete: [headTrainer],
        read: [trainee, trainer],
        write: [trainer, trainee],
    },
    javascript: {
        all: [headTrainer],
        delete: [],
        read: [trainee, trainer],
        write: [trainer],
    },
    node: {
        all: [headTrainer, trainee],
        delete: [headTrainer],
        read: [trainee, trainer],
        write: [trainer, trainee],
    },
};

export { permissions, trainee, trainer, headTrainer };

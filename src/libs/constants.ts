import { IPermission } from './interface';

const trainee = 'trainee';
const trainer = 'trainer';
const headTrainer = 'headTrainer';

const permissions: IPermission = {
    javascript: {
        all: [headTrainer],
        delete: [],
        read: [trainee, trainer],
        update:[],
        write: [trainer],
    },
    node: {
        all: [headTrainer, trainee],
        delete: [headTrainer],
        read: [trainee, trainer],
        update:[],
        write: [trainer, trainee],
    },
    traineeModule: {
        all: [headTrainer],
        delete: [],
        read: [trainee, trainer],
        update:[],
        write: [trainer],
    },
};
export { permissions, trainee, trainer, headTrainer };

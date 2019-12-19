import { diamond, equilateral } from './patterns'
import { hasPermission, validateUsers } from './utils'
import { IUsers } from './utils/interfaces';

const users: IUsers[] = [
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1@successive.tech'
    },
    {
        traineeEmail: 'trainee2@successive.tech',
        reviewerEmail: 'reviewer2@successive.tech'
    },
    {
        traineeEmail: 'trainee3@gmail.tech',
        reviewerEmail: 'reviewer3@successive.tech'
    },
    {
        traineeEmail: 'trainee1@successive.tech',
        reviewerEmail: 'reviewer1.tech'
    },

]

diamond(4)
equilateral(5)
hasPermission('node', 'trainee', 'delete');

validateUsers(users)
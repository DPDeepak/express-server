import validateEmail from './helpers';
import { IUsers } from './interfaces';


let invalidCount = 0, validCount = 0;
const validUser = [], invalidUser = [];

export default function validateUsers(users: IUsers[]): void {
    users.forEach(function (user: IUsers, index: number) {
        const { traineeEmail, reviewerEmail } = user
        if (validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
            validUser.push(`user ${index + 1}`)
            validCount++
        }
        else {
            invalidUser.push(`user ${index + 1}`)
            invalidCount++
        }
    })
    if (validUser)
        console.log(`${validCount} valid users are ${validUser}`)
    if (invalidCount)
        console.log(`${invalidCount} invalid users are ${invalidUser}`)
}
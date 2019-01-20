import validateEmail from './helpers';


let invalidCount = 0, validCount = 0;
const validUser = [], invalidUser = [];

export default function validateUsers(users) {
    users.forEach(function(user,index) {
    const { traineeEmail,reviewerEmail } = user
    if(validateEmail(traineeEmail) && validateEmail(reviewerEmail)) {
     validUser.push(`user ${index+1}`)
        validCount++   
    }
    else {
        invalidUser.push(`user ${index+1}`)
        invalidCount++   
    }
    })
    if(validUser)
    console.log(`${validCount} valid users are ${validUser}`)
    if(invalidCount)
    console.log(`${invalidCount} invalid users are ${invalidUser}`)
}
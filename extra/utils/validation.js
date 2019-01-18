const users = [
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
    {
    traineeEmail: 'trainee2@successive.tech',
    reviewerEmail: 'reviewer2@successive.tech'
    },
    {
    traineeEmail: 'trainee3@successive.tech',
    reviewerEmail: 'reviewer3@successive.tech'
    },
     {
    traineeEmail: 't121212@facebook.tech',
    reviewerEmail: 'reviewer1@softonic.tech'
    },
    {
    traineeEmail: 'trainee2@successive.tech',
    reviewerEmail: 'reviewer2@successive.tech'
    },
    {
    traineeEmail: 'trainee3@successive.tech',
    reviewerEmail: 'reviewer3@successive.tech'
    },
]
function validateEmail(email) {
let rex= /^([A-Za-z0-9_\-\.])+\@(successive.tech)$/;
return(rex.test(email))
}
let invalidCount = 0, validCount = 0;
const validUser = [], invalidUser = [];

function validateUsers(us) {
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


validateUsers(users)
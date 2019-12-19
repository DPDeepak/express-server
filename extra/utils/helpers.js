export default function validateEmail(email) {
    let rex= /^([A-Za-z0-9_\-\.])+\@(successive.tech)$/;
    return(rex.test(email))
    }
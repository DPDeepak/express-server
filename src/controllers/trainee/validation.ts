
export const validation = {
    create: {
        email: {
            errorMessage: 'Email is required',
            in: ['body'],
            regex: /^([A-Za-z0-9_\-\.])+\@(gmail.com)$/,
            required: true,
        },
        id: {
            in: ['body'],
            required: false,
            string: true,
            custom(value) {
                console.log('value', value);

            },
        },
        name: {
            errorMessage: 'Name is required',
            in: ['body'],
            regex: /^[a-zA-Z]+$/,
            required: false,
        },
        password: {
            errorMessage: 'Password is required',
            in: ['body'],
            required: true,
        },
    },
    delete: {
        id: {
            errorMessage: 'Id is required',
            in: ['body'],
            required: true,
        },
    },
    get: {
        limit: {
            default: 10,
            errorMessage: 'Limit is invalid',
            in: ['query'],
            number: true,
            required: true,
        },
        skip: {
            default: 0,
            errorMessage: 'Skip is invalid',
            in: ['query'],
            number: true,
            required: true,
        },

    },
    update: {
        dataToUpdate: {
            in: ['body'],
            isObject: true,
            required: true,
            custom(dataToUpdate) {
                console.log('dataToUpdate', dataToUpdate);

            },
        },
        id: {
            in: ['body'],
            required: true,
            string: true,
        },
    },
};

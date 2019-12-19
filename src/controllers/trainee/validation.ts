
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
            required: true,
        },
        password: {
            errorMessage: 'Password is required',
            in: ['body'],
            required: false,
        },
        role: {
            in: ['body'],
            required: true,
            string: true,
        },
    },
    delete: {
        originalID: {
            errorMessage: 'originalID is required',
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
            required: false,
        },
        originalID: {
            errorMessage: 'originalID is invalid',
            in: ['query'],
            required: true,
            string: true,

        },
        skip: {
            default: 2,
            errorMessage: 'Skip is invalid',
            in: ['query'],
            number: true,
            required: false,
        },
    },
    getData: {
        limit: {
            default: 10,
            errorMessage: 'Limit is invalid',
            in: ['query'],
            number: true,
            required: false,
        },
        skip: {
            default: 2,
            errorMessage: 'Skip is invalid',
            in: ['query'],
            number: true,
            required: false,
        },
    },
    update: {
        dataToUpdate: {
            in: ['body'],
            isObject: true,
            required: true,
            custom(dataToUpdate) {
                console.log('dataToUpdate in custom function', dataToUpdate);

            },
        },
        originalID: {
            in: ['body'],
            required: true,
            string: true,
        },
    },
};

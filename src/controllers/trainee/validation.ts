
export const validation = {
    get: {
        skip: {
            required: true,
            default: 0,
            number: true,
            in: ['query'],
            errorMessage: 'Skip is invalid',
        },
        limit: {
            required: true,
            default: 10,
            number: true,
            in: ['query'],
            errorMessage: 'Limit is invalid',
        }
    },
    create: {
        id: {
            required: true,
            string: true,
            in: ['body'],
            custom: function (value) {
                console.log('value', value);
                
            }
        },
        name: {
            required: true,
            regex: /^[a-zA-Z]+$/,
            in: ['body'],
            errorMessage: 'Name is required',
        },
        
    },
    delete: {
        id: {
            required: true,
            errorMessage: 'Id is required',
            in: ['body']
        }
    },
    update: {
        id: {
            required: true,
            string: true,
            in: ['body']
        },
        dataToUpdate: {
            in: ['body'],
            required: true,
            isObject: true,
            custom: function (dataToUpdate) { 
                console.log('dataToUpdate', dataToUpdate);
                
            },
        }
    }
}
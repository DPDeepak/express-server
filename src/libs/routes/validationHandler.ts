import { Request } from 'express';
export const validationHandler = (config) => (req: Request, res, next) => {
    const serverData = Object.keys(req.body);
    const keys = Object.keys(config);
    keys.forEach((key) => {
        const item = config[key];
        const value = item.in.map((item) => {
            return req[item][key];
        });
        if (item && item.required) {
            const validatedValue = value.filter((temp) => item);
            if (validatedValue.length !== value.length) {
                next({ error: item.errorMessage || 'data is missing' });
            }
            if (item.string) {
                if (!('string' === typeof value[0])) {
                    console.log('22----------');
                    next({ error: item.errorMessage || `${key} is not string type` });
                }
            }
            if (item.isObject) {
                if (!('object' === typeof value[0])) {
                    next({ error: item.errorMessage || `${key} is not object type` });
                }
            }
            if (item.number) {
                if (isNaN(value[0])) {
                    next({ error: item.errorMessage || `${key} is not number type` });
                }
            }
            if (item.regex) {
                const flag = item.regex.test(value);

                if (!flag) {
                    next({ error: item.errorMessage || 'name can only consist of alphabets ' });
                }
            }

            if (item.custom) {
                item.custom(5);
            }
        }
        else if (!item.required) {

            if (item.number) {
                if (value[0] === '' || isNaN(value[0])) {
                    console.log(key + ' = ', item.default);
                }

            }
        }
    });
    next();
};

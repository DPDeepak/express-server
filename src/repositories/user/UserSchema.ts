import * as mongoose from 'mongoose';

export class UserSchema extends mongoose.Schema {
    constructor(option: any) {
   const  baseSchema = {
        _id: String,
        email: String,
        name: String,
        };
   super(baseSchema, option);
    }

}

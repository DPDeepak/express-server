import * as mongoose from 'mongoose'

export class UserSchema extends mongoose.Schema {
    constructor(option: any) {
   const  baseSchema = {
        _id: String,
        name: String,
        email: String,
        }
        super(baseSchema,option);
    }
    
}
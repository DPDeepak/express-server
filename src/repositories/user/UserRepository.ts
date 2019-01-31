import * as mongoose from 'mongoose'
import IUserModel from './IUserModel'
import { userModel } from './UserModel'

export default class UserRepository {
    private model: mongoose.Model<IUserModel>;
    public static generateObjectId() {
        // console.log('-------------------+++++++', mongoose, mongoose.Types)
        return mongoose.Types.ObjectId()
    }
    constructor() {
        this.model = userModel;
    }
    public create(data: any): Promise<IUserModel> {
        // console.log('---------', ...data, UserRepository.generateObjectId())
        // return this.model.create(data, UserRepository.generateObjectId())
        // const user = new this.model(data);
        // return user.save((err, res) => {
        //     console.log('---------------22------', err, res)
        // })

        return this.model.create({...data,_id:UserRepository.generateObjectId()});
    }

}
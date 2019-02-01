import * as mongoose from 'mongoose'
import IUserModel from './IUserModel'
import { userModel } from './UserModel'

export default class UserRepository {
    private model: mongoose.Model<IUserModel>;
    public static generateObjectId() {
        return mongoose.Types.ObjectId()
    }
    constructor() {
        this.model = userModel;
    }
    public count():any {
        return this.model.countDocuments({})
    }
    public create(data: any): Promise<IUserModel> {
        // console.log('---------', ...data, UserRepository.generateObjectId())
        // return this.model.create(data, UserRepository.generateObjectId())
        // const user = new this.model(data);
        // return user.save((err, res) => {
        //     console.log('---------------22------', err, res)
        // })
        console.log(data);
        const saveData = {
            ...data,
            _id: UserRepository.generateObjectId()
        }

        return this.model.create(saveData);
    }
    public remove(data: any):any {
      return  userModel.deleteOne  ( data ,
            function (err) {
                if (err) console.log('error');
                else
                    console.log('successfully deleted', data);

            });
    }
    public update(oldData, newData):any {
       return userModel.findOneAndUpdate({ name: oldData }, { name: newData }, function (err, user) {
            if (err) throw err;
        }
        )
    }
    public read(data) {
        // userModel.findOne({name:data},function(err,data) {
        //     if(err)
        //     console.log('Error in fetching',err);
        //     else
        //     console.log(data);
        // })
        // userModel.find({}, function (err, docs) {
        //     if(err)
        //     console.log('Err');
        //    else 
        //     console.log('index', { docs: docs })
        // })
        console.log(data);
        
        return this.model.find(data)
    }
}
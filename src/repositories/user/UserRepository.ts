import * as mongoose from 'mongoose';
// import { Document, Model, Schema, SchemaType } from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
import VersionableRepository from '../versionable/VersionableRepository';

export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
    public static generateObjectId() {
        return mongoose.Types.ObjectId();
    }
    public model: mongoose.Model<IUserModel>;
    constructor() {
        super(userModel);
    }
    public count(): any {
        return this.model.countDocuments({});
    }
    public async create(data: any): Promise<IUserModel> {
        // console.log('---------', ...data, UserRepository.generateObjectId())
        // return this.model.create(data, UserRepository.generateObjectId())
        // const user = new this.model(data);
        // return user.save((err, res) => {
        //     console.log('---------------22------', err, res)
        // })
        const id = UserRepository.generateObjectId();
        const saveData = {
            ...data,
            _id: id,
            originalID: id,
        };
        return this.model.create(saveData);
    }
    public remove(data: any): any {
        return userModel.deleteOne(data,
            (err) => {
                if (err) { console.log('error'); }
                else {
                    console.log('successfully deleted', data);
                }

            });
    }
    public update(email, newName): any {
        //  console.log(req.body.email);

        return this.updateDB(email, newName)
        // return userModel.findOneAndUpdate({ name: oldData }, { name: newData }, (err, user) => {
        //     if (err) { throw err; }
        // },
        // );
    }
    public read(data): any {
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
        return this.model.find(data);
    }
}

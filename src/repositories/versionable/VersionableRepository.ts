// import { Document, Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { userModel } from './../user/UserModel';
import IVersionableModel from './IVersionableModel';
import VersionableSchema from './VersionableSchema';
import IUserModel from '../user/IUserModel';
export default class VersionableRepository<D extends mongoose.Document, M extends mongoose.Model<D>> {
    public static generateObjectId() {
        return mongoose.Types.ObjectId();
    }
    public model: M;

    constructor(modelType) {
        this.model = modelType;
    }
    public async genericCreate(data: any): Promise<D> {
        try {
            const id = VersionableRepository.generateObjectId();
            const saveData = {
                _id: id,
                email: data.email,
                name: data.newName,
                originalID: data.originalID,
                role: data.role,
            };
            console.log('---------', saveData);
            const data1 = await this.model.updateOne({ _id: data.originalID }, { $set: { deleted: true } }, { upsert: true });
            console.log('------', data1);

            return this.model.create(saveData);
        }
        catch (err) {
            console.log(err);
        }
    }
    public async updateDB(email, newName): Promise<D> {
        console.log('email----------------', email);
        console.log('------------------', newName);
        const result = await this.model.findOne({ email });

        return this.genericCreate(Object.assign(result, { newName }));

        // return this.model.findOne({ email }, (err, result) => {
        //     if (err) { throw new Error(); }
        //     console.log('Result data ', result)
        // },

    }

}

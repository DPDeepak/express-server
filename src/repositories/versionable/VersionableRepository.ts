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
    public async genericCreate(data: any, dataToUpdate: any): Promise<D> {
        try {
            const id = VersionableRepository.generateObjectId();
            const n = JSON.parse(JSON.stringify(data));
            let newObj = Object.assign({}, n, { ...dataToUpdate });
            newObj._id = id;
            newObj = JSON.parse(JSON.stringify(newObj));
            const updated = await this.model.create(newObj);
            const data1 = await this.model.updateOne({ originalID: data.originalID, deletedAt: { $exists: false } },
                { deletedAt: Date.now(), deleted: true }).then(
                    (err) => console.log(err)
                );
            return updated;
        }
        catch (err) {
            console.log('-----33----', err);
        }
    }
    public async updateDB(ID, dataToUpdate): Promise<D> {
        const result = await this.model.findOne({ originalID: ID, deletedAt: { $exists: false }  });
        return this.genericCreate(result, dataToUpdate);
    }
}

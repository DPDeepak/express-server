import * as mongoose from 'mongoose';
import IUserModel from '../user/IUserModel';
import { userModel } from './../user/UserModel';
import IVersionableModel from './IVersionableModel';
import VersionableSchema from './VersionableSchema';
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
                { deletedAt: Date.now(), deleted: true });
            return updated;
        }
        catch (err) {
            throw err;
        }
    }
    public async updateDB(ID, dataToUpdate): Promise<D> {
        let result;
        try {
            result = await this.model.findOne({ originalID: ID, deletedAt: { $exists: false } });
        }
        catch (err) {
            err = 'cannot found document for updation';
            throw err;
        }
        return this.genericCreate(result, dataToUpdate);

    }
}

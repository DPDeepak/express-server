import * as mongoose from 'mongoose'
export default interface IVersionableModel extends mongoose.Document {
    deletedAt: Date;
    createdAt: Date;
    updatedAt: string;
    originalID: string;
    deleted: boolean;
}

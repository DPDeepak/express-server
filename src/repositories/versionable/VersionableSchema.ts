import * as mongoose from 'mongoose';

class VersionableSchema extends mongoose.Schema {
    constructor(option: any, collection: any) {
        const base = Object.assign({
            createdAt: {
                default: Date.now,
                required: true,
                type: Date,
            },
            deleted: {
                required: false,
                type: Boolean,
            },
            deletedAt: {
                required: false,
                type: Date,
            },
            originalID: {
                required: true,
                type: String,
            },
            password: { type: String },
            role: { type: String },
            updatedBy: {
                required: false,
                type: String,
            },
        }, option);
        super(base, collection);
    }
}
export default VersionableSchema;

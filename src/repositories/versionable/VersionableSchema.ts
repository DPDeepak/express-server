import * as mongoose from 'mongoose'

class VersionableSchema extends mongoose.Schema {
    constructor(option: any) {
        const base = Object.assign({
            createdAt: {
                default: Date.now,
                required: true,
                type: Date,
            },
            deletedAt: {
                required: false,
                type: Date,
            },
            originalID: {
                required: false,
                type: String,
            },
            updatedBy: {
                required: false,
                type: String,
            }
        });
        super(base, option);
    }
}
export default VersionableSchema;
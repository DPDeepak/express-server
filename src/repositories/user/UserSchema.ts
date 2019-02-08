import VersionableSchema from '../versionable/VersionableSchema';

export class UserSchema extends VersionableSchema {
    constructor(option: any) {
        const baseSchema = {
            _id: String,
            email: String,
            name: String,
            password: String,
            role: String,
        };
        super(baseSchema, option);
    }
}

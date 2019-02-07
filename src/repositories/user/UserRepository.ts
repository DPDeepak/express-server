import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken'
import { Response, NextFunction } from 'express'
// import { Document, Model, Schema, SchemaType } from 'mongoose';
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
import VersionableRepository from '../versionable/VersionableRepository';
import * as bcrypt from 'bcrypt'
export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
    public static generateObjectId() {
        return mongoose.Types.ObjectId();
    }
    public next: NextFunction;

    public model: mongoose.Model<IUserModel>;
    constructor() {
        super(userModel);
    }
    public count(): any {
        return this.model.countDocuments({});
    }
    public async create(data: any): Promise<IUserModel> {
        const id = UserRepository.generateObjectId();
        const saveData = {
            ...data,
            _id: id,
            originalID: id,
        };
        return this.model.create(saveData);
    }
    public async verifyLogin(email, password) {
        try {
            const res = await this.model.findOne({ email });
            if (res) {
                const isVerified = await bcrypt.compare(password, res.password);
                if (isVerified) {
                    const token = await jwt.sign({
                        data: res,
                    }, 'secret', { expiresIn: 15 * 60 });
                    return token;
                }
                else {
                    throw new Error('Password is incorrect');
                }
            }
        } catch (err) {
            console.log('Error', err);
            throw err;
        }

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
    public async update(originalID, dataToUpdate): Promise<IUserModel> {
        return await this.updateDB(originalID, dataToUpdate)
    }
    public async read(data): Promise<IUserModel> {
        const result = await this.model.findOne({ originalID: data.originalID, deletedAt: { $exists: false } });
        return result;
    }
}

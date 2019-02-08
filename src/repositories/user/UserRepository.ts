import * as mongoose from 'mongoose';
import * as jwt from 'jsonwebtoken'
import { Response, NextFunction } from 'express'
import IUserModel from './IUserModel';
import { userModel } from './UserModel';
import VersionableRepository from '../versionable/VersionableRepository';
import * as bcrypt from 'bcrypt'
export default class UserRepository extends VersionableRepository<IUserModel, mongoose.Model<IUserModel>> {
    public static generateObjectId() {
        try {
            return mongoose.Types.ObjectId();
        }
        catch (err) {
            err = 'cannot generate objectId'
            throw err
        }
    }
    public next: NextFunction;

    public model: mongoose.Model<IUserModel>;
    constructor() {
        super(userModel);
    }
    public async count() {
        try {
            const count = await this.model.find().countDocuments()
            return count;
        }
        catch (err) {
            err = 'cannot Count database documents'
            throw err
        }

    }
    public async create(data: any): Promise<IUserModel> {
        const id = UserRepository.generateObjectId();
        const saveData = {
            ...data,
            _id: id,
            originalID: id,
        };
        try {
            return this.model.create(saveData);
        }
        catch (err) {
            err = 'cannot create document'
            throw err
        }
    }
    public async verifyLogin(email, password) {
        try {
            const res = await this.model.findOne({ email, deletedAt: { $exists: false } });
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
    public async remove(originalID: any) {
        let result;
        try {
            result = await this.model.findOne({ originalID: originalID });
        }
        catch (err) {
            err = 'cannot delete document'
            throw err
        }
        try {
            await this.model.updateOne({ originalID: originalID, deletedAt: { $exists: false } },
                { deletedAt: Date.now(), deleted: true })
        }
        catch (err) {
            err = 'cannot delete document successfully'
            throw err
        }
        if (result.deletedAt) {
            return 'Document already deleted'
        }

        return 'Document deleted'

    }
    public async update(originalID, dataToUpdate): Promise<IUserModel> {
        try {
            return await this.updateDB(originalID, dataToUpdate)
        }
        catch (err) {
            err = 'cannot update document'
            throw err
        }
    }
    public async read(data): Promise<IUserModel> {
        try {
            const result = await this.model.findOne({ originalID: data.originalID, deletedAt: { $exists: false } });
            return result;
        }
        catch (err) {
            err = 'cannot found document'
            throw err
        }
    }
    public async readAll(skip, limit) {
        try {
            const result = await this.model.find({ role: 'trainee' }, undefined,
                { skip: Number(skip), limit: Number(limit) });
            return result;
        }
        catch (err) {
            err = 'cannot found all document'
            throw err
        }
    }
}

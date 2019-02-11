import { NextFunction } from 'express';
import * as mongoose from 'mongoose';
import seed from './seedData';

class Database {
    public static open(MongoUrl) {
        return new Promise(async (resolve, reject) => {
            try {
                await mongoose.connect(MongoUrl, { useNewUrlParser: true })
                console.log('connected');
                seed();
                resolve();
            }
            catch (err) {
                err = 'Cannot connect to database'
                throw err;

            }
        });
    }
    public static close() {
        mongoose.disconnect();
        console.log('Disconnected');

    }
}
export default Database;

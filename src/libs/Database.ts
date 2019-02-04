import * as mongoose from 'mongoose';
import seed from './seedData';
class Database {
    public static open(MongoUrl) {
        // return mongoose.connect(MongoUrl, { useNewUrlParser: true }).then(
        //     () => {
        //         console.log('Successfully connected');
        //         seed()
        //     },
        //     err => {
        //         throw new Error(err);

        //     }
        // )
        return new Promise((resolve, reject) => {
            mongoose.connect(MongoUrl, { useNewUrlParser: true}).then(() => {
                console.log('connected');
                seed();
                resolve();
            }).catch((err) => {
                reject(err);
            });
        });
    }
    public static close() {
        mongoose.disconnect();
        console.log('Disconnected');

    }
}
export default Database;

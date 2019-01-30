import * as mongoose from "mongoose"
class Database {
    static open(MongoUrl) {
        return mongoose.connect(MongoUrl, { useNewUrlParser: true }).then(
            () => {
                console.log('Successfully connected');
            },
            err => {
                throw new Error(err);

            }
        )
        // return new Promise((resolve,reject)=>{
        //     mongoose.connect(MongoUrl,{ useNewUrlParser: true}).then(()=>{
        //         resolve();
        //     }).catch((err)=> {
        //         reject(err)
        //     })
        // })
    }
    static close() {
        mongoose.disconnect()
        console.log('Disconnected');
        
    }
}
export default Database
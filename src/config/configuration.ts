import { config } from 'dotenv';
import { IConfig } from './IConfig';
config();
const configuration: IConfig = Object.freeze({
    MongoUri: process.env.MONGO_URL, port: process.env.PORT,
});
export default configuration;

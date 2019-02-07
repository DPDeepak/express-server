import * as bodyParser from 'body-parser';
import * as express from 'express';
import Database from './libs/Database';
import { errorHandler, notFoundRoute } from './libs/routes';
import router from './router';
class Server {
    private app: express.Express;
    constructor(private config) {
        this.app = express();
    }
    public bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }
    public setupRoutes() {
        const { app } = this;
        app.use('/health-check', (req, res) => {
            res.send('I am OK!');
        });
        app.use('/api', router);
        app.use(notFoundRoute);
        app.use(errorHandler);
    }
    public run() {
        const { app, config: { port, MongoUri: mongo } } = this;
        Database.open(mongo)
            .then(() => {
                app.listen(port, (error) => {
                    if (error) {
                        throw error;
                    }
                    console.log('Running on Port : ', port);
                    // Database.close()
                });

            })
            .catch((err) => {
                console.log('Error in connection');
            });
    }
    private initBodyParser() {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json());
    }
}
export default Server;

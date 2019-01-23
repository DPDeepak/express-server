import * as express from 'express';
import * as bodyParser from 'body-parser'
import { errorHandler, notFoundRoute } from './libs/routes'
class Server {
    private app: express.Express
    constructor(private config) {
        this.app = express();
        console.log('constructor');

    }

    public bootstrap() {
        this.initBodyParser()
        this.setupRoutes()
        return this;
    }
    private initBodyParser() {
        const { app } = this;
        app.use(bodyParser.urlencoded({ extended: false }))
        app.use(bodyParser.json())
    }

    public setupRoutes() {
        console.log("setup routes");
        const { app } = this;
        app.use('/health-check', (req, res) => {
            res.send("I am OK!")
        })
        app.use(notFoundRoute)
        app.use(errorHandler)

    }
    public run() {
        const { app, config: { port } } = this;
        app.listen(port, error => {
            if (error) {
                throw error;
            }
            console.log("Running");

        });
    }
}
export default Server 
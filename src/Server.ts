import * as express from 'express';
class Server {
    private app: express.Express
    constructor(private config) {
        this.app = express();
        console.log('constructor');

    }
    public bootstrap() {
        this.setupRoutes()
        return this;
    }
    public setupRoutes() {
        console.log("setup routes");
        const { app } = this;
        app.use('/health-check', (req, res) => {
            console.log('hi');
            res.send("I am OK!")
        })
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
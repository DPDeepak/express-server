import Server from "./Server";
import configuration from './config/configuration'
const Server1 = new Server(configuration);
Server1.bootstrap()
Server1.run()
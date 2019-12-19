import configuration from './config/configuration';
import Server from './Server';
const Server1 = new Server(configuration);
Server1.bootstrap();
Server1.run();

import {Express, ServerOptions} from './express';
import * as http from 'http';

const options = {
    static: `src/main/static`,
    port: 8081
} as ServerOptions;

const server = Express.bootstrap(options).app;

http.createServer(server)
    .listen(options.port)
    .on("listening", () => console.debug('Listening on ' + options.port));
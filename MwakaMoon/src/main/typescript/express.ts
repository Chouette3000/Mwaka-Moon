import express from 'express';
import handlebars from 'express-handlebars';
import bodyParser = require("body-parser");
import errorHandler = require("errorhandler");

export interface ServerOptions {
    // Path contenant toutes les ressources statiques (css, js...)
    static: string;
    // Port de votre serveur
    port: number;
}

export class Express {

    public app: express.Application;

    constructor(public options: ServerOptions) {
        //create expressjs application
        this.app = express();
        //configure application
        this.config();
        this.app.set('port', this.options.port);
    }

    /**
     * Configure application
     */
    public config() {
		
		const router = express.Router();
		
        this.app
			.engine('handlebars', handlebars())
			.set('view engine', 'handlebars')
			.enable('view cache')
			.enable('trust proxy')
			.set('views', `${__dirname}/../src/main/views/`)
			.use(bodyParser())
			.use(router)
			.use(express.static(this.options.static))
            .get('/', (req, res) => res.send('Hello World!'))
            .get('/home', (req, res) => res.render('home_view'))
            .use(errorHandler());
    }

    /**
     * Bootstrap the application.
     */
    public static bootstrap(options: ServerOptions): Express {
        console.log("Try to start server");
        return new Express(options);
    }

}
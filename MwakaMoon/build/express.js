"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var express_handlebars_1 = __importDefault(require("express-handlebars"));
var bodyParser = require("body-parser");
var errorHandler = require("errorhandler");
var Express = /** @class */ (function () {
    function Express(options) {
        this.options = options;
        //create expressjs application
        this.app = express_1.default();
        //configure application
        this.config();
        this.app.set('port', this.options.port);
    }
    /**
     * Configure application
     */
    Express.prototype.config = function () {
        var router = express_1.default.Router();
        this.app
            .engine('handlebars', express_handlebars_1.default())
            .set('view engine', 'handlebars')
            .enable('view cache')
            .enable('trust proxy')
            .set('views', __dirname + "/../src/main/views/")
            .use(bodyParser())
            .use(router)
            .use(express_1.default.static(this.options.static))
            .get('/', function (req, res) { return res.send('Hello World!'); })
            .get('/home', function (req, res) { return res.render('home_view'); })
            .use(errorHandler());
    };
    /**
     * Bootstrap the application.
     */
    Express.bootstrap = function (options) {
        console.log("Try to start server");
        return new Express(options);
    };
    return Express;
}());
exports.Express = Express;
//# sourceMappingURL=express.js.map
"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("./express");
var http = __importStar(require("http"));
var options = {
    static: "src/main/static",
    port: 8081
};
var server = express_1.Express.bootstrap(options).app;
http.createServer(server)
    .listen(options.port)
    .on("listening", function () { return console.debug('Listening on ' + options.port); });
//# sourceMappingURL=app.js.map
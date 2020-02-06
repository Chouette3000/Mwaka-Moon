"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Routing = /** @class */ (function () {
    function Routing() {
    }
    Routing.create = function (router) {
        var route = new Routing();
        //router.get("/home", (req: Request, res: Response) => route.viewHome(req, res));
    };
    Routing.prototype.viewHome = function (req, res) {
        //res.locals['title'] = todo.id ? 'Modification Todo' : 'Ajout Todo';
        //res.locals['todo'] = this.dao.findById(todo.id) || {} as Todo;
        res.render('home_view');
    };
    return Routing;
}());
exports.Routing = Routing;
//# sourceMappingURL=routing.js.map
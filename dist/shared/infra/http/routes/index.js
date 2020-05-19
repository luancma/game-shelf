"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var igdb_router_1 = __importDefault(require("@modules/games/infra/http/routes/igdb.router"));
var user_router_1 = __importDefault(require("@modules/users/infra/http/routes/user.router"));
var session_router_1 = __importDefault(require("@modules/sessions/infra/http/routes/session.router"));
var shelf_router_1 = __importDefault(require("@modules/shelves/infra/http/routes/shelf.router"));
var routes = express_1.Router();
routes.use("/games", igdb_router_1.default);
routes.use("/user", user_router_1.default);
routes.use("/session", session_router_1.default);
routes.use("/shelf", shelf_router_1.default);
exports.default = routes;

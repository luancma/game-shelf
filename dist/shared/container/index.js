"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var UsersRepository_1 = __importDefault(require("@modules/users/infra/mongoose/repositories/UsersRepository"));
var ShelvesRepository_1 = __importDefault(require("@modules/shelves/infra/mongoose/repositories/ShelvesRepository"));
tsyringe_1.container.registerSingleton('UsersRepository', UsersRepository_1.default);
tsyringe_1.container.registerSingleton('ShelvesRepository', ShelvesRepository_1.default);

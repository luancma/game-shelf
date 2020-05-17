"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var validateSession_1 = __importDefault(require("../middlewares/validateSession"));
var ShelfController_1 = __importDefault(require("../controllers/ShelfController"));
var shelfRouter = express_1.Router();
shelfRouter.use(validateSession_1.default);
shelfRouter.post('/', ShelfController_1.default.store);
shelfRouter.get('/', ShelfController_1.default.index);
shelfRouter.delete('/:id', ShelfController_1.default.delete);
exports.default = shelfRouter;

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
var UsersRepository_1 = __importDefault(require("@modules/users/infra/mongoose/repositories/UsersRepository"));
var CreateUserService_1 = __importDefault(require("@modules/users/services/CreateUserService"));
var ShelvesRepository_1 = __importDefault(require("@modules/shelves/infra/mongoose/repositories/ShelvesRepository"));
var userRepository = new UsersRepository_1.default();
var shelfRepository = new ShelvesRepository_1.default();
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.store = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, name, password, nickname, email, createUserService, _id, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = request.body, name = _a.name, password = _a.password, nickname = _a.nickname, email = _a.email;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 4, , 5]);
                        createUserService = tsyringe_1.container.resolve(CreateUserService_1.default);
                        return [4 /*yield*/, createUserService.execute({
                                name: name,
                                nickname: nickname,
                                email: email,
                                password: password,
                            })];
                    case 2:
                        _id = (_b.sent())._id;
                        return [4 /*yield*/, shelfRepository.createShelf({
                                _id: _id,
                            })];
                    case 3:
                        _b.sent();
                        return [2 /*return*/, response.json({
                                _id: _id,
                                name: name,
                                email: email,
                            })];
                    case 4:
                        error_1 = _b.sent();
                        return [2 /*return*/, response.status(400).json({
                                error: error_1.message,
                            })];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.show = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var email, _a, _id, name_1, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        email = request.body.email;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, userRepository.getUser({ email: email })];
                    case 2:
                        _a = _b.sent(), _id = _a._id, name_1 = _a.name;
                        return [2 /*return*/, response.json({
                                _id: _id,
                                name: name_1,
                                email: email,
                            })];
                    case 3:
                        error_2 = _b.sent();
                        return [2 /*return*/, response.status(400).json({
                                error: error_2.message,
                            })];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var users, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, userRepository.listUsers()];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, response.json(users)];
                    case 2:
                        error_3 = _a.sent();
                        return [2 /*return*/, response.status(400).json({
                                error: error_3.message,
                            })];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return UserController;
}());
exports.default = new UserController();

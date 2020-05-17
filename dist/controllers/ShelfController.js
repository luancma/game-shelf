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
var Shelf_1 = __importDefault(require("../models/Shelf"));
var ShelfController = /** @class */ (function () {
    function ShelfController() {
    }
    ShelfController.prototype.store = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            function validateGame(id, shelf) {
                return shelf.games.find(function (game) { return game.id === id; });
            }
            function insertGame(shelf) {
                if (shelf === void 0) { shelf = checkExistShelf; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (validateGame(game.id, shelf)) {
                                    return [2 /*return*/, response.json({
                                            message: 'Jogo já está cadastrado',
                                        })];
                                }
                                return [4 /*yield*/, Shelf_1.default.updateOne({
                                        _id: request.user.id,
                                    }, {
                                        $push: { games: game },
                                    })];
                            case 1:
                                _a.sent();
                                return [2 /*return*/, response.json({
                                        status: 'Sucesso',
                                        game_name: game.name,
                                    })];
                        }
                    });
                });
            }
            var game, checkExistShelf, newShelf;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        game = {
                            id: 3333,
                            cover: {
                                id: 85867,
                                height: 960,
                                url: '//images.igdb.com/igdb/image/upload/t_thumb/co1u97.jpg',
                                width: 720,
                            },
                            involved_companies: [
                                {
                                    id: 24212,
                                    company: {
                                        id: 248,
                                        name: 'Bandai Namco Entertainment',
                                    },
                                },
                                {
                                    id: 24213,
                                    company: {
                                        id: 2438,
                                        name: 'CyberConnect2',
                                    },
                                },
                            ],
                            name: 'Naruto Shippuden: Ultimate Ninja Storm 4',
                            platforms: [
                                {
                                    id: 6,
                                    name: 'PC (Microsoft Windows)',
                                },
                                {
                                    id: 48,
                                    name: 'PlayStation 4',
                                },
                                {
                                    id: 49,
                                    name: 'Xbox One',
                                },
                            ],
                            popularity: 5.903648259672391,
                            rating_count: 61,
                            summary: 'Experience the exhilarating full-adventure Naruto Shippuden and follow Naruto Uzumaki on all his fights.\n\nWith more than 12 million Naruto Shippuden Ultimate Ninja STORM games sold worldwide, this series established itself among the pinnacle of Anime & Manga adaptations on videogames! As every good story comes to an end Naruto Shippuden: Ultimate Ninja Storm 4 is going to be the ultimate STORM game! For the first time ever, a Naruto/Naruto Shippuden game will take advantage of the graphics power of the new generation of consoles.',
                            themes: [
                                {
                                    id: 1,
                                    name: 'Action',
                                },
                            ],
                        };
                        return [4 /*yield*/, Shelf_1.default.findOne({
                                _id: request.user.id,
                            })];
                    case 1:
                        checkExistShelf = _a.sent();
                        if (!!checkExistShelf) return [3 /*break*/, 3];
                        return [4 /*yield*/, Shelf_1.default.create({
                                _id: request.user.id,
                            })];
                    case 2:
                        newShelf = _a.sent();
                        insertGame(newShelf);
                        _a.label = 3;
                    case 3:
                        insertGame();
                        return [2 /*return*/];
                }
            });
        });
    };
    ShelfController.prototype.index = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var gameList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Shelf_1.default.findOne({
                            _id: request.user.id,
                        })];
                    case 1:
                        gameList = _a.sent();
                        return [2 /*return*/, response.json(gameList.games)];
                }
            });
        });
    };
    ShelfController.prototype.delete = function (request, response) {
        return __awaiter(this, void 0, void 0, function () {
            var id, gameList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = request.params.id;
                        return [4 /*yield*/, Shelf_1.default.findOne({
                                _id: request.user.id,
                            })];
                    case 1:
                        gameList = _a.sent();
                        gameList.games = gameList.games.filter(function (game) { return game.id != id; });
                        return [4 /*yield*/, gameList.save()];
                    case 2:
                        _a.sent();
                        response.json(gameList);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ShelfController;
}());
exports.default = new ShelfController();

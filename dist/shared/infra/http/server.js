"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var index_1 = __importDefault(require("./routes/index"));
var index_2 = __importDefault(require("../mogoose/index"));
var app = express_1.default();
app.use(cors_1.default());
index_2.default();
app.use(express_1.default.json());
app.use(index_1.default);
app.listen(process.env.PORT || 8080, function () {
    console.log("App runing on port 8080");
});

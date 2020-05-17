"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var index_1 = __importDefault(require("./routes/index"));
var cors_1 = __importDefault(require("cors"));
var app = express_1.default();
app.use(cors_1.default());
mongoose_1.default.connect("\n  mongodb+srv://luancma_admin:nasa@cluster-test-imbnp.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
app.use(express_1.default.json());
app.use(index_1.default);
app.listen(process.env.PORT || 8080, function () {
    console.log("App runing on port 8080");
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_1 = __importDefault(require("./routes/auth"));
const morgan_1 = __importDefault(require("morgan"));
const app = express_1.default();
//Configuraciones
app.set('port', 3000);
app.use(auth_1.default);
//middelware
app.use(morgan_1.default('dev'));
exports.default = app;
//# sourceMappingURL=app.js.map
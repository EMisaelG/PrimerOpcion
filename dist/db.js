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
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = require("mysql2");
function conexion() {
    return __awaiter(this, void 0, void 0, function* () {
        const conectar = yield mysql2_1.createPool({
            host: 'https://3.13.108.243/',
            user: 'esteban',
            password: 'Pechan_1',
            database: 'inaesa',
            connectionLimit: 10
        });
        return conectar;
    });
}
exports.conexion = conexion;
//# sourceMappingURL=db.js.map
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("../db"));
function getSexos(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const promiseconectando = db_1.default.promise();
        try {
            const sexo = yield promiseconectando.query('SELECT * FROM sexo');
            return res.json(sexo);
        }
        catch (error) {
            console.log(error.message);
        }
        promiseconectando.end();
    });
}
exports.getSexos = getSexos;
function createSexo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const promiseconectando = db_1.default.promise();
        try {
            const nsexo = req.body;
            yield promiseconectando.query('INSERT INTO sexo SET ?', [nsexo]);
            return res.json({
                message: 'Creado'
            });
        }
        catch (error) {
            console.log(error.message);
        }
        promiseconectando.end();
    });
}
exports.createSexo = createSexo;
function getSexo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.sexoId;
        const promiseconectando = db_1.default.promise();
        try {
            const sexo = yield promiseconectando.query('SELECT * FROM sexo WHERE idsexo = ?', [id]);
            return res.json(sexo);
        }
        catch (error) {
            console.log(error.message);
        }
        promiseconectando.end();
    });
}
exports.getSexo = getSexo;
function deleteSexo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.sexoId;
        const promiseconectando = db_1.default.promise();
        try {
            yield promiseconectando.query('DELETE FROM sexo WHERE idsexo = ?', [id]);
            console.log('Eliminado');
        }
        catch (error) {
            console.log(error.message);
        }
        promiseconectando.end();
    });
}
exports.deleteSexo = deleteSexo;
function updateSexo(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const id = req.params.sexoId;
        const updatesexo = req.body;
        const promiseconectando = db_1.default.promise();
        try {
            yield promiseconectando.query('UPDATE sexo SET ? WHERE idsexo = ?', [updatesexo, id]);
            console.log('Actualizado');
        }
        catch (error) {
            console.log(error.message);
        }
        promiseconectando.end();
    });
}
exports.updateSexo = updateSexo;
//# sourceMappingURL=sexo.controller.js.map
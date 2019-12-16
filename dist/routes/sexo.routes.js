"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sexo_controller_1 = require("../controllers/sexo.controller");
const router = express_1.Router();
router.route('/')
    .get(sexo_controller_1.getSexos)
    .post(sexo_controller_1.createSexo);
router.route('/:sexoId')
    .get(sexo_controller_1.getSexo)
    .delete(sexo_controller_1.deleteSexo)
    .put(sexo_controller_1.updateSexo);
exports.default = router;
//# sourceMappingURL=sexo.routes.js.map
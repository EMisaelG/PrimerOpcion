"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql2_1 = require("mysql2");
const conectando = mysql2_1.createPool({
    host: 'ec2-3-13-108-243.us-east-2.compute.amazonaws.com',
    port: 3306,
    user: 'esteban',
    password: 'Pechan_1',
    database: 'inaesa',
    connectionLimit: 10
});
exports.default = conectando;
//# sourceMappingURL=db.js.map
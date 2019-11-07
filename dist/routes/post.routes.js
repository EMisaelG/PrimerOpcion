"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_controller_1 = require("../controllers/post.controller");
const router = express_1.Router();
router.route('/')
    .get(post_controller_1.getPosts);
exports.default = router;
//# sourceMappingURL=post.routes.js.map
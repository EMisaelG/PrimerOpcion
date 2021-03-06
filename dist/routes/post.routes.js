"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sexo_controller_1 = require("../controllers/sexo.controller");
const router = express_1.Router();
router.route('/')
    .get(sexo_controller_1.getPosts)
    .post(sexo_controller_1.createPosts);
router.route('/:postId')
    .get(sexo_controller_1.getPost)
    .delete(sexo_controller_1.deletePost)
    .put(sexo_controller_1.updatePost);
exports.default = router;
//# sourceMappingURL=post.routes.js.map
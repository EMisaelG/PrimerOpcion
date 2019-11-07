import { Router } from 'express';
import { bienvenida } from '../controllers/index.controller'

const router = Router();

router.route('/')
    .get(bienvenida);

export default router;
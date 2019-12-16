import { Router } from 'express';
import { getSexos, createSexo, getSexo, deleteSexo, updateSexo } from '../controllers/sexo.controller';

const router: Router = Router();

router.route('/')
    .get(getSexos)
    .post(createSexo)

router.route('/:sexoId')
    .get(getSexo)
    .delete(deleteSexo)
    .put(updateSexo)
    
export default router;
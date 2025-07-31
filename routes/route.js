import express from 'express';
const router = express.Router();
import controle from '../controllers/controller.js'

router.get('/', controle.home)
router.get('/teste', controle.teste)
router.post('/formulario', controle.formulario)
export default router
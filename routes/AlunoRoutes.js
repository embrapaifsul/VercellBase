import express from 'express';
const router = express.Router();
//Busca o AlunoController
import AlunoController from '../controllers/AlunoController.js'
const controle = new AlunoController();

const caminhobase = 'aluno/'

router.get('/' + caminhobase + 'add', controle.openAdd)
router.post('/' + caminhobase + 'add', controle.add)
router.get('/' + caminhobase + 'lst', controle.list)
export default router
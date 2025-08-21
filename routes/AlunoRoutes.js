import express from 'express';
const router = express.Router();

import AlunoController from '../controllers/AlunoController.js'

const caminhoBase = "aluno/"
const controle = new AlunoController(caminhoBase);

//criação das rotas
router.get('/'+caminhoBase+'add', controle.openAdd)  //     /aluno/add
router.post('/'+caminhoBase+'add', controle.add)  
router.get('/'+caminhoBase+'lst', controle.list) 
router.post('/'+caminhoBase+'lst', controle.find)   
router.get('/'+caminhoBase+'del/:id', controle.del)
router.get('/'+caminhoBase+'edt/:id', controle.openEdit)
router.post('/'+caminhoBase+'edt/:id', controle.edit)  


export default router
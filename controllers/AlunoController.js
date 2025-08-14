//importar o Model
import Aluno from '../models/aluno.js'

export default class AlunoController{

    constructor(caminhoBase='aluno/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }
        this.add = async(req, res)=>{
            //cria o Aluno
            await Aluno.create({
                nome: req.body.nome,
                matricula:req.body.matricula
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        this.list = async(req, res)=>{
            const resultado = await Aluno.find({})
            res.render(caminhoBase + 'lst', {Alunos:resultado})
        }

        

    }
}
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
         this.find = async(req, res)=>{
            const valordigitado = req.body.pesquisar
            const resultado = await Aluno.find(
                {nome:{$regex:valordigitado,
                $options: "i"}
                })
            res.render(caminhoBase + 'lst', {Alunos:resultado})
        }

        this.del = async(req, res)=>{
            const resultado = await Aluno.findByIdAndDelete(req.params.id)
            res.redirect('/'+caminhoBase + 'lst')
        }

         this.openEdit = async(req, res)=>{
            const resultado = await Aluno.findById(req.params.id)
            res.render(caminhoBase + 'edt', {Aluno:resultado})
        }

        this.edit = async(req, res)=>{
            const resultado = await Aluno.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/'+caminhoBase + 'lst')

        }
        

    }
}
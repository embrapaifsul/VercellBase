//importar o Model
import Curso from '../models/Curso.js'

export default class CursoController{

    constructor(caminhoBase='curso/'){
        this.caminhoBase = caminhoBase
    
        this.openAdd = async(req, res)=>{
            res.render(caminhoBase + "add")
        }

        this.add = async(req, res)=>{
            //cria o Curso
            await Curso.create({
                nome: req.body.nome,
                matricula:req.body.matricula
            });
            res.redirect('/'+caminhoBase + 'add');
        }
        
        this.list = async(req, res)=>{
            const resultado = await Curso.find({})
            res.render(caminhoBase + 'lst', {Cursos:resultado})
        }
         this.find = async(req, res)=>{
            const valordigitado = req.body.pesquisar
            const resultado = await Curso.find(
                {nome:{$regex:valordigitado,
                $options: "i"}
                })
            res.render(caminhoBase + 'lst', {Cursos:resultado})
        }

        this.del = async(req, res)=>{
            const resultado = await Curso.findByIdAndDelete(req.params.id)
            res.redirect('/'+caminhoBase + 'lst')
        }

         this.openEdit = async(req, res)=>{
            const resultado = await Curso.findById(req.params.id)
            res.render(caminhoBase + 'edt', {Curso:resultado})
        }

        this.edit = async(req, res)=>{
            const resultado = await Curso.findByIdAndUpdate(req.params.id, req.body)
            res.redirect('/'+caminhoBase + 'lst')

        }
        

    }
}
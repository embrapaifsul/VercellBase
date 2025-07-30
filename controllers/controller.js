
//exemplo de exportação de modelo
//import Aluno from '../models/aluno.js';


export async function home(req,res){
     res.render('index')
}

export async function teste(req, res) {
    const resultado = "teste";
    res.render('index2',{teste: resultado});
}

export async function formulario(req, res) {
    res.render('index');
}
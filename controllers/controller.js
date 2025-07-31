
 async function home(req,res){
     res.render('index')
}

 async function teste(req, res) {
    const resultado = "teste";
    res.render('index2',{teste: resultado});
}

async function formulario(req, res) {
    res.render('index');
}

export default {
  home,
  teste,
  formulario
};
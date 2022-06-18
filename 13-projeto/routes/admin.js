//vai guardar todas as rotas do admin
const express = require("express")
const router = express.Router() //trazendo a componentização do express em forma de rotas
const mongoose = require("mongoose")
//para invocar o model de categoria, se realiza o require e depois adicionar o model a uma variavel
require('../models/Categoria')
const Categoria = mongoose.model('categorias') //assim que se utiliza o model de forma externa no mongoose. Chama o arquivo do modelo e passa uma categoria

//definindo as rotas

//rota principal
router.get('/', (req, res) => {
    res.send('Página principal - rota ADM')
}) //definindo uma rota .get. Pode ser .post. Essa vai ser a rota principal

//rota que vai listar os posts
router.get('/posts', (req, res) => {
    res.send('Pagina posts - rota ADM')
})

//rota que vai conter categaorias
router.get('/categorias', (req, res) => { //esse é o endereço a ser digitado na url
    res.render('./admin/categorias') //esse é o arquivo no codigo a ser renderizado
})

//rota que vai dar direto no formulario
router.get('/categorias/add', (req, res) => {
    res.render('./admin/addcategorias')
})

router.post('/categorias/nova', (req, res) => { //aqui vai trabalhar com a captura de dados para o banco

    //faremos o sistema de validação aqui:
    let erros = []
    if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) { //se o campo nome for vazio, ou o tipo no campo nome for indefinido ou o nome for nulo, ele irá registrar uma mensagem de erros.
        erros.push({
            texto: "nome invalido"
        }) //isso vai fazer com que passemos dados para o array

    }

    if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null) { //se o campo nome for vazio, ou o tipo no campo nome for indefinido ou o nome for nulo, ele irá registrar uma mensagem de erros.
        erros.push({
            texto: "slug invalido"
        }) //isso vai fazer com que passemos dados para o array

    }

    if (erros.length > 0) { //se existir mais de 1 erro
        res.render("./admin/addcategorias", {
            erros: erros
        }) //passando dados atraves do render
    } else {
        const novaCategoria = { //vai receber os dados do formulario
            nome: req.body.nome, //esses campos fazem referencia ao nome no html
            slug: req.body.slug,
        }

        new Categoria(novaCategoria).save().then(() => {
            //se fez o insert com sucesso
            res.redirect('./') //se der certo ele irá redirecionar para categorias
        }).catch((error) => {
            console.log('insert não adicionado devido ao erro: ' + error)
        })

    }


})

router.get('/testeboots', (req, res) => {
    res.render('./admin/index')
})



module.exports = router//exportando a constante router para ser chamado na principal ou onde quer que seja necessario
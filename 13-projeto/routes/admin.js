//vai guardar todas as rotas do admin
const express = require("express")
const router = express.Router() //trazendo a componentização do express em forma de rotas
const mongoose = require("mongoose")
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
    const novaCategoria = { //vai receber os dados do formulario
        nome: req.body.nome, //esses campos fazem referencia ao nome no html
        slug: req.body.slug,
    }

    new Categoria(novaCategoria).save().then(() => {
        //se fez o insert com sucesso
        console.log('insert adicionado')
    }).catch((error) => {
        console.log('insert não adicionado devido ao erro: ' + error)
    })
})

router.get('/testeboots', (req, res) => {
    res.render('./admin/index')
})



module.exports = router//exportando a constante router para ser chamado na principal ou onde quer que seja necessario
//vai guardar todas as rotas do admin
const express = require("express")
const router = express.Router() //trazendo a componentização do express em forma de rotas

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
router.get('/categorias', (req, res) => {
    res.send('Pagina de categorias - rota ADM')
})

router.get('/testeboots', (req, res) => {
    res.render('./admin/index')
})



module.exports = router//exportando a constante router para ser chamado na principal ou onde quer que seja necessario
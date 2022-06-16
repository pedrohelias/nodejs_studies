//esse é o arquivo principal

//carregando modulos do projeto
const express = require('express') //recebe o express
const handlebars = require('express-handlebars') //recebe o handlebars
const bodyParser = require('body-parser') //recebe o bodyparser
const mongoose = require('mongoose'); //recebe o moongose
const admin = require('./routes/admin') //chamando as rotas dentro da pasta routs
const path = require('path') //esse diretorio serve para trabalhar com pastas e manipular diretorios

//carregando algumas variaveis do sistema
const port = 8081

//inicializando alguns modulos
const app = express()

//configuração dos modulos
//Bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Handlebars
const hbs = handlebars.create({ defaultLayout: 'main' }) //fazendo o handlebars saber qual o default dele
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); //configurando o handblars

//Mongoose

//Public - arquivos estáticos
app.use(express.static(path.join(__dirname + '/public')))//vai trazer um caminho absoluto pra pasta public

//rotas 
app.use('/admin', admin) //para acessar no localhost é necesário escrever admin/posts ou admin/categorias, ou seja la qual for a rota. Então o admin será um prefixo. Vai salvaguardar as rotas disponiveis apenas para o admin

//outros

//callback servidor
app.listen(port, () => {
    console.log('servidor rodando!')
})
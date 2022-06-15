//esse é o arquivo principal

//carregando modulos do projeto
const express = require('express') //recebe o express
const handlebars = require('express-handlebars') //recebe o handlebars
const bodyParser = require('body-parser') //recebe o bodyparser
const mongoose = require('mongoose'); //recebe o moongose

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

//rotas 


//outros

app.listen(port, () => {
    console.log('servidor rodando!')
})
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

//inicializando sessões
const session = require('express-session')
const flash = require('connect-flash')

//configuração dos modulos
//session
app.use(session({
    secret: "cursodenode", //a secret é uma chave para gerar sessões 
    resave: true, //força o salvamento da sessão no registro de sessões
    saveUninitialized: true //força o salvamento de uma sessão não inicializada no registro de ssessões
}))
app.use(flash()) // o flash precisa ser configurado abaixo da sessão

//configurar o middleware para trabalharmos com sessão. Sabemos que ele recebe requisição, resposta e next
app.use((res, req, next) => {
    res.locals.success_msg = req.flash('success_msg')//assim se cria variaveis globais. E dessa forma conseguir atingir t oda a aplicação
    res.locals.error_msg = req.flash('error_msg')
    next()
})


//Bodyparser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//Handlebars
const hbs = handlebars.create({ defaultLayout: 'main' }) //fazendo o handlebars saber qual o default dele
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); //configurando o handblars

//Mongoose
mongoose.connect('mongodb://localhost/blogapp').then(() => { //não existia essa base dados, então apenas com esse comando ai o mongo criou automaticamente
    console.log('conectado ao banco!')
}).catch((error) => {
    console.log('problemas com a conexão com o banco:' + error)
})

//Public - arquivos estáticos
app.use(express.static(path.join(__dirname + '/public')))//vai trazer um caminho absoluto pra pasta public

app.use((req, res, next) => {
    console.log("oi, sou um middleware")  //se não for colocado um next, a requisição vai cair nele e nunca vai passar, ela vai travar nele. Tanto que semper que se acessa uma rota na URL, ela cai no middleware. para eliminar isso, é necessário utilizar o next(). Vamos utiliazr para fazer o sistema de autenticação.
    next()
})

//rotas 
app.use('/admin', admin) //para acessar no localhost é necesário escrever admin/posts ou admin/categorias, ou seja la qual for a rota. Então o admin será um prefixo. Vai salvaguardar as rotas disponiveis apenas para o admin

//outros

//callback servidor
app.listen(port, () => {
    console.log('servidor rodando!')

})
//utilizaremos o body parser, para pegar dados do formulario
//para instalar, é simples: npm install --save body-parser
//handlebars x reactjs, pesquisar

const bodyParser = require("body-parser")


const express = require("express");
const conection = express();

//configurando body-parser
conection.use(bodyParser.urlencoded({extend:false}))
conection.use(bodyParser.json())


//configurando handlebars
const handlebars = require("express-handlebars");
const hbs = handlebars.create({defaultLayout:'main'});
conection.engine('handlebars', hbs.engine);
conection.set('view engine', 'handlebars')

//criando rotas
conection.get('/cad', function(req,res){
    res.render('formulario')
});

conection.post('/add', function(req,res){ //post pois estamos utilizando o metodo post no formulario
   
    //paga pegar dados que estão vindo do formulario, basta escrever a estrutura a seguir:
    let titulo = req.body.titulo; //o 'titulo' vem do atributo 'name' da tag do html, tanto em input quanto em textarea
    let conteudo = req.body.conteudo; //o mesmo para ca.

    res.send("Titulo: " + titulo + ", texto inserido: " + conteudo) //esse trecho vai inserir o texto que desejamos


})

//callback do servidor
conection.listen(8081,function(){
    console.log("servidor subiu com sucesso!")
});
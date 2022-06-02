//desenvolver sistema de cadastro de postagens
//handlebars -> Template engine - gera mais funcionalidades no HTML, como: estrutura de repetição, mostrar variaveis do backend no html e afins
//para install o handlebars: npm install --save express-handlebars


const express = require("express");
const conection = express();
const sequelize = require("sequelize");
//conexão com o banco
const db = new sequelize('dataNode', 'root', 'pedro170995', {
    host: "localhost",
    dialect: "mysql"
})

const  handlebars  = require("express-handlebars"); //inicializar o handlebars. Em seguinda configurar o handlebars para utiliza-lo como template engine. 

/*
configuração do handlebars
    TEMPLETA ENGINE - Com as duas linhas de codigo abaixo, estamos deixando claro que queremos utilizar o handlebards como template engine no projeto
*/
    const hbs = handlebars.create({defaultLayout:'main'}); //o main é o layout padrão
    conection.engine('handlebars', hbs.engine);
    conection.set('view engine', 'handlebars');
/*
    logo em seguida criar uma pasta chamada 'views' na raiz do projeto. Dentro dessa pasta,cria uma pasta chamada 'layouts'. E dentro de 'layouts' criar um arquivo chamado 'main.handlebars'. 
*/

//CRIACÂO DE ROTAS

conection.get("/cad", function(req,res){ //primeira criação de rota
    res.render('formulario'); //dessa forma o handlebars saberá exatamente que ao entrar na pasta views, ele procurará pelo arquivo 'formulario'.
})





    
//callback conexão banco
db.authenticate().then(function(){
    console.log("banco conectado com sucesso");
}).catch(function(erro){
    console.log("banco não conectado devido ao erro: " + erro);
})    

//callback conexão servidor
conection.listen(8081,function(){
    console.log('servidor rodando!')
})


//O Layout 'main.handlebars' já fornece todo o layout que precisamos para realizar um documento em html. Por isso de sua importancia, Então em outras telas não teremos a codificação completa do html.
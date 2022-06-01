/*
const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("pagina inicial")
})



app.listen(8081, function(){
    console.log("conectado!")
})

*/

const Sequelize = require("sequelize"); //inicializando o sequelize
const sequelize = new Sequelize('aprendizado_node', 'root', 'pedro170995', {
    host:'localhost',
    dialect: 'mysql'
} ); //parametros: 1- qual banco quer se conectar?, qual o usuário do banco, qual a senha do banco, e por fim abrir um JSON indicando o host(o servidor o qual está sendo realizado a aplicação), e o dialect(qual banco estamos mexendo)

sequelize.authenticate().then(function(){
    console.log('conectado com sucesso!')
}).catch(function(erro){
    console.log('falha ao se conectar ' + erro)
})

//acima a função authenticate pode avisar se houve falhas ou naõ na conexão com o banco. O THEN é uma função de callback, executada quando algum evento acontece(no caso o evento é o sequelize.authenticate). Qual o authenticate tenta conectar ao banco de dados, ela atinge sucesso ou falha. Em caso de sucesso, o then é chamado. Caso contraário, o catch é chamado. 
//Por fim, utilizando o nodemon nome_do_arquivo poderemos rodar o arquivo. Para parar, simlesmente ctrl c
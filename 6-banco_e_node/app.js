//SEQUELIZE é um ORM - ele abstrai toda camada de banco de dados - Trabalhar diretamente do node com o banco de dados. O SEQUILIZE trabalha com diversos tipos de bancos.
//Para adiciona-lo ao projeto, escrevemos 'npm install --save sequelize'
//Adicionalmente, para trabalhar com o mysql, adicionar 'npm install --save mysql2' - sempre verificar para ver se uma nova versão não foi disponibilizada. 

//Atualizando: 1 - npm install express --save
//2 - npn install --save sequelize
//3 - npm install --save mysql2


const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("pagina inicial")
})



app.listen(8081, function(){
    console.log("conectado!")
})

const escapeHTML = require('escape-html');
const express = require('express')
const app = express();

app.get("/", function(req,res){
    res.send("Primeira rota para esse projeto!")
})

app.get("/html", function(req,res){
    //res.sendFile(__dirname+ "/4-express_modulo/index.html") //o dirname retorna o diretorio raiz da aplicação, vai evitar erros futuros se for realizado dessa forma 
    res.sendFile(__dirname + "/index.html"); //vai procurar no proprio diretorio!!
})


app.listen(8081, function(){
    console.log("O servidor está no ar na porta https://localhost:8081")
})


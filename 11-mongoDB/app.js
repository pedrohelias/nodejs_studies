//o mongoose é um ODM semelhante ao sequelize, porém facilita a conexão com o banco de dados. Ele vai mapear o banco de dados. 
//para instalar no projeto, utilizar: npm install --save mongoose 

//Para utilizar:

const mongoose = require("mongoose") //vai armarzenar o mongoose

mongoose.connect("mongodb://localhost/banco_mongo", {
    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(()=>{ 
    console.log("Conectado com sucesso!")
}).catch((error)=>{
    console.log("erro ao se conectar: " + error)
}) //vai se conectar com o banco via mongoose
//é necessário falar em qual banco queremos conectar. Se não for criado, basta escrever o nome no comando, e o mongoose vai criar o banco com o nome citado
//ou pode ir no terminal do mongo, e escrever 'use nome_do_banco'. Será criado o banco. A princípio ele estará vazio, então o banco não será mostrado
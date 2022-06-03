//pasta models criada para guardar todos os models da aplicação
//para esse arquivo serão levados todos as estruturas referentes ao sequelize que estão no app.js
//agora cada model ficará dentro de um arquivo especifico


//configurando sequelize
const sequelize = require("sequelize");
const db = new sequelize('database_app', 'root', 'pedro170995', { //utilizando um banco novo
    host: 'localhost',
    dialect: 'mysql'
} );


//PRECISAMOS EXPORTAR ESSA PAGINA PARA O APP.JS
//Então, faremos da seguinte forma:


//callback do banco de dados
db.authenticate().then(function(){
    console.log("banco conectado com sucesso!");
}).catch(function(erro){
    console.log("banco não conectado, devido ao erro: " + erro);
});


//exportando as variaveis quando esse arquivo for chamado
module.exports = {
    sequelize: sequelize,
    db: db
}

//module.exports = { sequelize,db}

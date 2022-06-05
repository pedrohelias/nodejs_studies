//iniciando o sequelize
const sequelize = require("sequelize");
const db = new sequelize('10_revisao', 'root', 'pedro170995', {
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true} //vai permitir com que o banco seja listado


})


//callback da função
db.authenticate().then(function(){
    console.log('banco conectado com sucesso!');
}).catch(function(error){
    console.log('banco não conectado devido ao erro: ' + error);
});

//exportando esse modulo para que ele possa ser utlizado em diferentes partes na aplicação
module.exports = {
    sequelize: sequelize,
    db: db,
}
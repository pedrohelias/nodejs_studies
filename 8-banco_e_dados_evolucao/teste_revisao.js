const sequelize = require("sequelize");
const db = new sequelize("dataNode", "root", "pedro170995", {
    host: "localhost",
    dialect: "mysql"
});

const celular = db.define("celular", {
    marca: {
        type: sequelize.STRING
    },
    numero: {
        type: sequelize.INTEGER
    },
    operadora: {
        type: sequelize.STRING
    }
    
});

const perfume = db.define("perfume", {
    fragrancia: {
        type: sequelize.STRING
    },
    marca: {
        type: sequelize.STRING
    },
    custo: {
        type: sequelize.INTEGER
    }

});



celular.create({
    marca: "Samsung",
    numero: 845125,
    operadora: "Oi"
});

celular.create({
    marca: "IPhone",
    numero: 84551,
    operadora: "Claro"
});







db.authenticate().then(function(){
    console.log("conectado!");
}).catch(function(erro){
    console.log("não foi possível realizar conexão devido ao erro: " + erro);
})
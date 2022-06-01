//SEMPRE LEMBRAR DE INSTALAR PACOTES:
//npm install express --save
//npm install --save sequelize
//npm install --save mysql2

const sequelize = require("sequelize");
const conection = new sequelize('aprendizado_node', 'root', 'pedro170995', {
    host: 'localhost',
    dialect: 'mysql'
});

//CRIANDO MODELS = GERA TABELAS DIRETAMENTE DO NODE

//model Postagem
const postagem = conection.define('postagens', {
    titulo: {
        type: sequelize.STRING //fazendo isso, o campo titulo terá o tipo VARCHAR
    },
    conteudo: {
        type: sequelize.TEXT
    }
}) //definir modelo, tabela. Como primeiro argumento, temos o nome da tabela que deseja-se criar. no caso 'postagens'. No segundo argumento é um JSON que remeterá a toda tabela a ser criada. O que estará dentro do JSON serão as colunas, titulo que é um VARCHAR, por exemplo. 


const usuario = conection.define('usuarios', {
    primeiroNome: {
        type: sequelize.STRING
    },
    sobrenome: {
        type: sequelize.STRING
    },
    idade:{
        type: sequelize.INTEGER
    },
    email:{
        type: sequelize.STRING
    }
        
})

//SINCRONIZANDO: Feito uma vez, deve-se comentar senão ele vai recriar a tabela.

postagem.sync({force: true}) 
usuario.sync({force: true})



//sincronizando o model criado com o banco de dados. O force está dentro de um JSON e garantirá que a tabela seja criada.
//O SEQUELIZE nos mostra o comando utilizado para criar a tabela ao rodar o código nodemon app.js

//PARA CONFIRMAR SE FOI CRIADO A TABELA, basta acessar o mysql via terminal ou grafico. 
//mysql -h localhost -u root -p e procurar a base de dados e tabela.

//Alguns campos adicionais serão criados dentro de cada tabela, para controle do sistema.

//PARA INSERIR DADOS


postagem.create({
    titulo: 'titulo teste',
    conteudo: 'conteudo 1 foi passado'
})


usuario.create({
    nome: 'Pedro',
    sobrenome: 'Helias',
    idade: 26,
    email: 'email'
})
//BASICAMENTE APENAS COM ESSE PEQUENO TRECHO DE CODIGO É POSSIVEL INSERIR DADOS NA TABELA. TOda vez que é salvo o arquivo de texto(esse arquivo), ele vai duplicar. Então as vezes é melhor utilizar o node.

//LEMBRAR DE SEMPRE COMENTAR OS TRECHOS DE CODIGO DE CRIAÇÂO DE TABELA E INSERT SENAO HAVERAO DUPLICATAS

conection.authenticate().then(function(){
    console.log("conectado com sucesso!");
}).catch(function(erro){
    console.log("conexão não permitida devido ao erro: " + erro);
})


//inicializando a variavel db_post para criação de tabelas no banco
const db_post = require("./db") //vai receceber as variaveis db e sequelize

const Post = db_post.db.define('postagem', { //essa variavel vai definir a tabela postagem
    titulo: {
        type: db_post.sequelize.STRING
    },
    conteudo: {
        type: db_post.sequelize.STRING
    }
}) 

Post.sync({force:false}); //vai sincronizar a base criada com a tabela. criada. O false fará com que não ocorram duplicatas.

//exportar Post para que seja utilizado em outras partes do projeto

module.exports = Post //queremos exportar apenas post, pois db_post já faz menção a algo exportado



//apos esse passo é interessante aplicar um node Post.js para que as tabelas sejam adicionadas 
//aqui ficará todos arquivos de posts
const db = require("./DB"); //evocando o arquivo db criado com a estrutura do campo. Fazendo isso, teremos acesso a variavel db e sequelize que foram criadas no aquivo DB.js

const Post = db.db.define('postagens', {
    titulo: {
        type:db.sequelize.STRING
        
    },
    conteudo: {
        type:db.sequelize.TEXT
    }
})


Post.sync({force:false}); //nunca vai deixar recriar coisas

module.exports = Post; //exportando o post

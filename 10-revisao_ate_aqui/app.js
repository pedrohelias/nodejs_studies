//1º passo -> npm install express --save
//2º passo -> npm install --save sequelize
//3º passo -> npm install --save mysql2
//5º passo -> npm install --save express-handlebars
//6º passo -> npm install --save body-parse
//criação de models para separação de partes do codigo //há o script de criaçaõ de tabela de banco de dados la
//criação de views, onde ficarão todas as paginas do projeto. Dentro dessa pasta, criar o layouts, onde ficará o layout padrão da aplicação

//configuração servidor
const bodyParser = require("body-parser");
const express = require("express");
Express = express();

//trazendo o Post do models:
const Post = require('./models/Post')

//configurando handlebars
const handlebars = require("express-handlebars");
const { rsort } = require("semver");
const hbs = handlebars.create({defaultLayout: 'main'}) //fazendo o handlebars saber qual o default dele
Express.engine('handlebars', hbs.engine);
Express.set('view engine', 'handlebars'); //configurando o handblars

//definindo o body-parser para colher dados do front end - com express
Express.use(bodyParser.urlencoded({extended:false}))
Express.use(bodyParser.json());


//criando as rotas e paginas, ja com funcções de coleta

Express.get('/', function(req,res){
 //retorna tudo que há em Post
 Post.findAll().then(function(posts){ //findAll - encontre todos os posts
    res.render('home', { //dentro dessas chaves conseguimos passsar qualquer valor para o handeblears
        posts: posts

    })    
 }).catch(); //vai retornar todos os bancos que existem na tabela post. 
 //temos que passar os posts para dentro da view. E para isso usamos o then. Vai realiazr o efeito sempre que função for positiva. Nesse caso ele vai receber como parametro todos os posts

//É possível definir a forma como é mostrado o dado, se é crescente ou decrescente. Basta fazer Post.all{{order:[['id','DESC']]}} para decrescente... ou vice versa
    
})


Express.get('/cad', function(req,res){
    res.render('formulario') //vai renderizar 'formulario' em /cad
})

Express.post('/add', function(req,res){ //atraves dessa funcao vamos pegar o que foi colocado no formulario e adicionar no banco
   Post.create({ //aqui vamos pegar a variaveis Post e cria conteudo a partir do que foi estabelecido nela.
       titulo: req.body.titulo,
       conteudo: req.body.conteudo
       //queremos saber se houve sucesso ou naõ na criação do post, então utilizando .then e .catch
   }).then(function(){
       
       res.redirect('/') //caso tenha sucesso vai ser redicionado para uma pagina com todos os posts
   }).catch(function(erro){
       res.send('erro na criação do post: ' + erro)
   })
})




Express.listen(8081, function(){
    console.log("servidor subiu com sucesso em: https://localhost:8081/")
})
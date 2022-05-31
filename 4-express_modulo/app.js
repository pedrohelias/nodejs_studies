/* para instalar o express nos arquivos, basta entrar na pasta dos arquivos e digitar 'npm install express --save' Esse comando vai criar uma pasta chamada node_modules e disponibilizar as funções do express.*/
/* instalar o nodemon com npm install nodemon -g. Agora toda aplicação rodará com nodemon nome_aplicacao */
/*Construindo uma pequena aplicação */

const express = require("express"); /* adicionando o modulo do express */
const app = express(); /* essa variavel app está recebendo a funçaõ express que vem do modulo express, ou seja ela vai copiar uma instancia completa do framework para dentro de app. Assim, toda vez utilizaremos app.alguma_coisa para realizar algum procedimento */
/* é importante que essas variaveis sejam constantes */

//Acontence um pequeno erro "Cannot GET /"
//E isso ocorre porque a aplicação ainda não tem uma rota definida. Então, vamos criar:


app.get("/", function(requisicao,resposta){
    resposta.send("Seja bem vindo ao app com nodemon"); /*funcao de call back para informar algo na tela.*/
});

//app.get("/4-express_modulo/index.html")


app.get("/sobre", function(requisicao, resposta){
    resposta.send("teste pagina") //criando outra rota
});

//PARAMETROS: São valores dinâmicos que o usuário conseue passar, e a partir dele se executa algumas ações. Quando se adiciona /:_nome_parametro ao primeiro argumento do get, queremos dizer que algum parametro sera adicionado apos essa rota. Diversas rotas podem ser passadas na url, como parametro1/:parametro2/:parametro3...

app.get("/ola/:cargo/:nome", function(requisicao, resposta){ //O requisição receberá dados da requisição.
    //resposta.send(requisicao.params); se for adicionado apenas requisicao.params, aparecerá um json na tela com os parametros.
    resposta.send("ola " + requisicao.params.nome) //vai colocar o ola + nome
    //so pode ser enviado o send uma unica vez.
})






app.listen(8081, function()
{
   console.log('servidor funcionando!')
}); /* isso vai fazer o servidor rodar. E por obrigaçaõ, essa deve ser a ultima linha do código. Quando o listen é executado, ele dispara um evento. Sendo assim, podemos chamar uma função de callback, do jeito listado acima */
//A maioria das funções do express possuem função de callback

//localhost:porta
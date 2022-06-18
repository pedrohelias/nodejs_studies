# instanlando as dependencias do projeto:
## 1 -> npm install --save express
## 2 -> npm install --save express-handlebars
## 3 -> npm install body-parser --save
## 4 -> npm install --save mongoose


## é necessário criar pastas para difernetes partes do codigo, como view, rotas, models e afins...
## colocar as rotas separadas em um arquivo. O express traz um componente chamadou Router
## é necessário integrar arquivos estáticos na aplicação, então utilizaremos arguivos .css e javascript dentro da view. Utilizaremos o bootstrap
## a pasta public vai guardar todos os arquivos estáticos. É necessário atualizar o arquivo main.handlebars para utilizar o bootstrap

## colocar uma nav em todas as partes da aplicaçaõ. Dividir o template em partes. O handlebars lida com isso utilizando o "partials". Atualizar novamente o arquivo main.handlebars

## middleware -> Para o cliente se comunicar com o host, é necessário utlizar o protocolo HTTP. O middleware é uma pequena aplicação que vai ficar intermediando a comunicação entre cliente e servidor. Então cada requesição e resposta que aconteer, toda comunicação, o middleware vai observar. Com ele é possível "manipular" requisições e respostas antes das mesmas chegarem ao destino. 

## para configurar sessão, é necessário instalar o modulo de sessions. Para tal, fazemos npm install --save express-session. Também precisar instalar o modulo connect-flash. Para tal, fazemos: npm install --save connect-flash

## tudo que tem app.use() é um middleware
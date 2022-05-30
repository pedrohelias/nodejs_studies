/* sobre o backend
http é um protocolo de comunicação entre cliente e servidor (usuário normal e google, por exemplo). Toda vez que se visita ums site, se está realizando uma comunicação cliente e servidor a partir do protocolo HTTP. É possível solicitar dados, enviar dados e receber dados. É necessário utilizar então esse protocolo para criar aplicações web. 
*/

/* O node possui um modulo proprio para comunicaçaõ http, que é um pouco limitado. Para esse caso, ha frameworks melhores.
Neste exemplo, utilizaremos as libs proprias do node para isso

*/

const protocolo_http = require('http'); /* http faz parte do nucleo do root, por isso é facil inclui-lo na argumentação do require. Há o modulo 'fs - os filesystems'*/
/*a operacao acima vai permitir que se crie aplicações web para o backend */

protocolo_http.createServer(function(req,res){
    res.end('Hello World!')    
}).listen(8082); /* o listn serve para listar qual porta de rede queremos adicionar o servidor. Create Server criará um servidor normal. 
A função 'CreateServer' possui uma função de callback realizada como fizemos acima. Possui como argumentos o req e o res. O res dará respostas ao usuario em caso de correto acesso à pagina. Ele irá exibir o hello world, como visto. 
*/

console.log('o servidor está rodando!')
/*para acessar o servidor no navegador é simplesmente colocar localhost:8082, no caso a porta 8081 foi um exemplo, mas poderia ser qualquer outra. Para fechar o servidor, basta apertar CTRL + C. Toda alteração requer, por enquanto, rodar novamente o servidor. Para verificar pelo terminal se o servidor está aberto, basta digital sudo netstat -plnut | grep :numero_socket */
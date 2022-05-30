/* é importante dividir as funções em partes - os modulos - Vários arquivos*/
/*exemplo, projeto calculadora */
/*para tal, vamos utilizar um modelo de função, exemplo:

let nome_funcao = function(argumentos){
    
    return alguma_coisa;
}


*/

/*Apos isso, vamos ate o fim do arquivo e digitamos  module.exports = nome_funcao */
/*ja no arquivo principal aonde se deseja chamar essa funções, digita-se:

let nome_variavel = require('endereço do arquivo onde a funcao foi alocada')
console.log(nome_variavel(argumentos))

Isso vai fazer com que se importe um modulo criado. O modulo ficara salvo dentro de uma variavel que foi ajustada a um require. 
*/
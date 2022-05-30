function operacoes(a,b){
    const soma = a + b;
    const sub = a - b;
    const multi = a * b;
    const divi = a/b;
    console.log('a soma é:' + soma);
    console.log('a substração é:' + sub);
    console.log('a multiplicacao é:' + multi);
    console.log('a Divisao é:' + divi);
}

function operacoesComRetorno(a,b){
    return a + b;     
}

/*duas diferentes funções, com retorno e sem*/

const num = 10;
const num2 = 20;

operacoes(num,num2);

console.log('o resultado da função com retorno é: ' + operacoesComRetorno(num,num2));
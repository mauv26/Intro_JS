// fazendo ref. para biblioteca de entrada
let entrada = require('prompt-sync')();

let nome = entrada('Digite seu nome: ');

console.log('Nome digitado: '+ nome );
console.log('-----------------------');

//forma errada
//let n1 = entrada('Digite o 1º número: ');
//let n2 = entrada('Digite o 2º número: ');

let n1 = parseInt(entrada('Digite o 1º número: '));
let n2 = parseInt(entrada('Digite o 2º número: '));

let soma = n1 + n2;
let sub = n1 - n2;
let multi = n1 * n2;
let div = n1 / n2;


console.log('Resultado da soma entre ' + n1 + ' e ' + n2 + ' = ' + soma);
console.log('Resultado da subtração entre ' + n1 + ' e ' + n2 + ' = ' + sub);
console.log('Resultado da multiplicação entre ' + n1 + ' e ' + n2 + ' = ' + multi);
console.log('Resultado da divisão entre ' + n1 + ' e ' + n2 + ' = ' + div);
entrada('...');
entrada('Digite ENTER para encerrar');
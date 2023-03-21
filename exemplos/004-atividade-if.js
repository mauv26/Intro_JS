let entrada = require('prompt-sync')();

let n1 = parseFloat(entrada('Digite a 1º nota: '));
let n2 = parseFloat(entrada('Digite a 2º nota: '));

let somaNota = n1 + n2;
let nota = somaNota/2;

    if(nota < 5 ){
         console.log('Sua nota foi I');
    }

    if(nota >= 5 && nota < 6.5 ){
        console.log('Sua nota foi R');
    }

    if(nota > 6 && nota < 8 ){
        console.log('Sua nota foi B');
    }

    if(nota >= 8 ){
        console.log('Sua nota foi MB');
    }
//Contador de vogais de uma string

var vogais = ['a', 'e', 'i', 'o', 'u'];
var palavra = 'sapeca iaia';
var contador = 0;

for (var i = 0; i < palavra.length; i++) {
    for (let j = 0; j < vogais.length; j++) {
        if (palavra[i] === vogais[j]) {
            contador++;
            console.log(`Vogal: ${vogais[j]}`);
        }
    }
}

console.log('');
console.log(`Contador de vogais: ${contador}`);
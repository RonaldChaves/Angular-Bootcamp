var notas = [10, 2, 5, 5];
var soma = 0;

notas.push(10);
notas.push(9);

for(let i = 0; i < notas.length; i++){
    console.log(`Nota somada: ${notas[i]}`);
    soma =+ notas[i];
}

var media = soma / notas.length;

console.log('');
console.log(`Valor da soma: ${soma}`);
console.log('');
console.log(`Valor da quantia de notas: ${notas.length}`);
console.log('');
console.log(media);
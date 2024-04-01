"use strict";
function concatArray(...itens) {
    return new Array().concat(...itens);
}
const numArray = concatArray([1, 5], [3, 4]);
const strArray = concatArray(['Leite', 'vaca'], ['simone']);
console.log(numArray);
console.log(strArray);

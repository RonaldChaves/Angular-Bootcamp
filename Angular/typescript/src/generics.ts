function concatArray<T>(...itens: T[]): T[]{ // o T em questão serve para delimitar futuramente o tipo de entrada que os arrays terão.
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3,4]);
const strArray = concatArray<string[]>(['Leite', 'vaca'], ['simone']);

console.log(numArray);
console.log(strArray);
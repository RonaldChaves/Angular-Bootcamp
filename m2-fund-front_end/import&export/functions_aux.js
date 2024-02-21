module.exports = { gets, print};

let i = 0;
const contador = [5, 10, 15,20];
function gets(){
    const nmr = contador[i];
    i++;
    return nmr;
}

function print(texto){
    console.log(texto);
}
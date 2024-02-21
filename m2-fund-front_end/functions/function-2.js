var CL = console.log;
var pag = 8;
var price = 230;

function createDesc(valor, desc){
    var desconto = (valor - (valor * (desc/100)));
    return `O valor do desconto foi: ${desconto} 
            \n(${valor} - (${valor} * (${desc}/100)}`;
}

if(pag === 1){
    CL(createDesc(price, 10));
}else if(pag === 2){
    CL(createDesc(price, 15));
}else if(pag === 3){
    CL(createDesc(price, 20));
}else if(pag === 4){
    CL(createDesc(price, 40)); 
}else{
    CL('Forma de pagamento indisponivel');
}

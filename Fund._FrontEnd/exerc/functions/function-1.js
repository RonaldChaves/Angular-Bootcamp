function verifyName(name){
    return `O ${name}`;
}
var nome = verifyName('Ronald');

function verifyAge(age){
    if (age > 18) {
        console.log(`${nome} é maior de idade --- sua idade: ${age}`);
    }else{
        console.log(`${nome} é menor de idade --- sua idade: ${age}`);
    }
}
verifyAge(17);

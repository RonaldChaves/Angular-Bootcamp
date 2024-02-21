class Pessoa {
    nome;
    idade;
    nascimento;
    cidade;

    constructor(nome, idade, nasc, cidade){
        this.nome = nome;
        this.idade = idade;
        this.nascimento = nasc;
        this.cidade = cidade;
    }

    descrever(){
        console.log(`meu nome é ${this.nome} e minha idade é ${this.idade}`);
        console.log(`Nasci no ano de ${this.nascimento} na cidade de ${this.cidade}`);
    }
}

class carro{
    marca;
    cor;
    ano;
    proprietario;

    constructor(marca, cor, ano){
        this.marca = marca;
        this.cor = cor;
        this.ano = ano;
    }
    
    descricao(){
        console.log(`Carro da marca ${this.marca} , do ano ${this.ano} e cor ${this.cor}.`)
    }
    
    validarProp(){
        if(!this.proprietario){
            console.log(`Este veiculo esta sem proprietario.`);
        }else{
            console.log(`O proprietario e ${this.proprietario}`)
        }
    }
}

function criarPessoa(pessoa, idade, nascimento, cidade){
    var create = new Pessoa(pessoa, idade, nascimento, cidade);
    console.log(create)
    create.descrever();
    console.log('')
    return create;
}

function criarCarro(marca, cor, ano, prop){
    var create = new carro(marca, cor, ano)
    
    create.proprietario = prop.nome;
    
    console.log(create)
    create.descricao()
    create.validarProp()
    console.log('')
}

var ronald = criarPessoa('Ronald', 21, 2003, 'Paracatu');
var camily = criarPessoa('Camily', 17, 2006, 'Joao Monlevade');
var ronaldo = criarPessoa('Ronaldo', 57, 1966, 'Coronel Frabiciano');
var cintia = criarPessoa('Cintia', 51, 1972, 'Sao Paulo');
var pitoco = criarPessoa('Pitoco', 10, 2013, 'Sao Gonçalo');

criarCarro('Renault', 'preto', 2010, camily);
criarCarro('Ferrari', 'vermelha', 2019, ronald);
criarCarro('Fiat', 'branco', 2024, ronaldo);
criarCarro('Nissan', 'prata', 2024, cintia);
criarCarro('Brinquedo', 'colorido', 2015, pitoco);

/*console.log(uno);
uno.validarProp();
uno.proprietario = ronald.nome; 
console.log(uno);
uno.validarProp();
console.log(ronald);
*/

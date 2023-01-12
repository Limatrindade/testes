// class são modelos ou moldes de objeto: EXP

class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
}
 
// para chamar o class tem que passar o NEW e seu nome, lembrando de não esquecer de armazenar em uma const
const cliente1 = new Cliente()
const cliente2 = new Cliente()
const cliente3 = new Cliente()

// atribuindo valores a esses atributos da class
cliente1.nome = "Matheus"
cliente1.cpf = 46111663844
cliente1.agencia = 1234
cliente1.saldo = 0

// criando novos clientes
cliente2.nome = "rodrigo"
cliente2.cpf = 78945612315
cliente2.agencia = 5225
cliente2.saldo = 1000

cliente3.nome = "roberta"
cliente3.cpf = 12345678910
cliente3.agencia = 7557
cliente3.saldo = 50


console.log(cliente1)
console.log(cliente2)
console.log(cliente3)

// Classes definem uma forma de organizarmos uma série de informações repetidas no nosso código e por isso devemos usar elas quando temos código que se repete e que faz parte de um contexto coeso.

// métodos acessores get: é usado apenas para exibir/retornar um valor, nunca para alterar
// método acessores set: é usado quando você quer alterar o valor/conteúdo de um atributo

// encapsulamento ( ou seja, proteção dos dados )
// usando _ antes de um atributo dentro de uma class, é uma convenção entre os programadores que se trata de um atributo privado, porêm mesmo assim, esses atributos podem ser alterados fora do scopo da class

// já usando # antes de um atributo dentro de uma class, indica que é um atributo protegido e desta maneira, qualquer alteração fora do scopo da class, irá retornar um erro de syntax

// o construtor é um método especial nas class, em que permite o usuario passar os valores dos atributos na instância (como se fosse os parametros de uma função): EXEMPLO:

class Pessoa {
    _nome
    _idade
    _peso
    _altura

    constructor (nome, idade, peso, altura) {
        this._nome = nome
        this._idade = idade
        this._peso = peso
        this._altura = altura
    }
}

const pessoa1 = new Pessoa ("Matheus" , 22, 55.3, 1.65)
const pessoa2 = new Pessoa ("Rodrigo" , 29, 85.3, 1.85)
const pessoa3 = new Pessoa ("Ana" , 47, 66, 1.75)
const pessoa4 = new Pessoa ("David" , 16, 45.7, 1.61)
const pessoa5 = new Pessoa ("Roberto" , 39, 102, 1.95)

console.log(pessoa1)
console.log(pessoa2)
console.log(pessoa3)
console.log(pessoa4)
console.log(pessoa5)

// Tratando de herança temos a sintaxe " extends " que herda as propriedades e métodos da classe mencionada logo após

// método abstrato em class, é uma classe que tem o comportamento de nunca ser instânciada e sim apenas exportada

// atributo estatico { static } 
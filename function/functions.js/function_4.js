// funções construtoras

function Carro(marca, modelo, ano) {
    this.marca = marca
    this.modelo = modelo
    this.ano = ano
}

const carro1 = new Carro("ferrari", "laferrai", 2019)
const carro2 = new Carro("lamborguini", "murcielago", 2010 )

console.log(carro1)
console.log(carro2)

// Ou seja funções construtoras servem como molde para um objeto posterior. lembrando que estas funções construtoras precisam ser instanciadas pelo OPERADOR NEW. O THIS dentro delas se referencia ao objeto criado a partir delas.


// outro exemplo
function Alunos(nome, ano, idade) {
    this.nome = nome
    this.ano = ano
    this.idade = idade
}
const aluno1 = new Alunos("João", "5 ano", 10)
const aluno2 = new Alunos("Ana", "7 ano", 13)
const aluno3 = new Alunos("Beatriz", "9 ano", 15)

console.log(aluno1)
console.log(aluno2)
console.log(aluno3)

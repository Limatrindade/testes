// operadores unários exp: typeof , delete

// typeof , mostra o tipo de dado
console.log(typeof "trindade")
console.log(typeof true)
console.log(typeof 26)
console.log(typeof Array)
console.log(typeof new Array)
console.log(typeof Object)
console.log(typeof new Object)

// delete , apaga alguma propriedade
const pessoa = {
    nome: "Matheus",
    idade: 22
}

delete pessoa.idade
console.log(pessoa)
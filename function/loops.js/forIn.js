// for...in , cria um loop em cima de um objeto

let pessoa = {
    nome: 'Matheus',
    idade: 22,
    peso: 55 
}

for(let propriedade in pessoa) {
    console.log(propriedade)
    console.log(pessoa[propriedade])
}





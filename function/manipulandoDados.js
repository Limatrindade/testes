// prototype ou protótipo.  Que nada mas é o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.

// usando alguns metodos em arrays

// toString() , converte um array em uma string de valores(separados por vírgula) EXP:

let times = ["palmeiras", "santos", "corinthians", "vasco"]
let lista = times.toString()
console.log(lista)

// join() , permite especificar um separador EXP:

let times2 = ["psg", "barcelona", "juventus"]
let lista2 = times2.join("/")
console.log(lista2)

// Adicionando elementos a um array: push() e unshift()

// push() adiciona um elemento ao final do array

let times3 = ["botafogo", "fluminense", "cruzeiro"]
let lista3 = times3.push("abc")
console.log(times3)

// unshift inclui um novo elemento no inicio do array

let cor = ["azul", "vermelho", "rosa"]
let listaCor = cor.unshift("verde")
console.log(cor)

// Removendo elementos de um array: pop() e shift()

// pop() remove o ultimo elemento de um array

let carro = ["ford", "pegeout", "fiat"]
let lCarros = carro.pop()
console.log(carro)

// shift() remove o primeiro elemento de um array

let motos = ["honda", "yamaha", "suzuki"]
let lmotos = motos.shift()
console.log(motos)

// método concat() , serve para concatenar dois arrays

let num1 = [0,1,22,56,87]
let str1 = ["abc", "zwj", "gol"]
let juncao = num1.concat(str1)
console.log(juncao)

// slice() extrai uma sessão de um array e retorna um novo array

let etnias = ["braco", "negro", "pardo", "alemão"]
let novoEtnias = etnias.slice(1,3) // os dois numeros(indice do array) representam, respectativamente o inicio e o fim desse novo array. Observação o segundo numero não entra no array
console.log(novoEtnias)

// splice() podemos escolher um índice inicial e final para subtituir valores entre eles 

let spl1 = ["uva", "maça", "banana", "goiaba", "beringela"]
spl1.splice(1,2, "splice") // esse comando .splice() adicionou um novo elemento no lugar dos elemntos 1 e 2
console.log(spl1)  

// método reverse() inverte a ordem dos elementos do array

let reve = [10, 9, 8, 7, 6, 5]
reve.reverse()
console.log(reve)

// método .length() para ver o tamanho de array string e etc...

// método delete para apagar um elemento usando o seu índice no array

let animais = ["leão", "rinoceronte", "elefante", "foca"]
delete  animais[1]
console.log(animais)

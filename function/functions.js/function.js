// a função pode ser guardada em uma const

// função anônima
// parametro da função () 
const somar = function (num1, num2) {
    console.log(num1 + num2)
}

somar(2,3) // esses numeros representam argumentos dos parametros

// outro exemplo
const somar2 = function (n1, n2) {
   console.log(n1 + n2)
}

somar2(45,2)

let n1 = 20
let n2 = 13

console.log(`"O numero n1:" ${n1}`)
console.log(`"O numero n2:" ${n2}`)

// função sem retorno
function semRetorno (s1, s2) {
    console.log(s1 + s2)
}

semRetorno(2,2)
semRetorno(4,2)

// função com retorno
function comRetorno (r1, r2) {
    return r1 * r2
}

console.log(comRetorno(1,1))
console.log(`A sua função com retorno é: ${(comRetorno(5,6))}`)
 
// function scope

let algumPensamento = "meu nome é matheus"

function dizAlgo(algumPensamento) {
   algumPensamento = "meu sobrenome é trindade"
    return algumPensamento
} 
// o js ira respeitar o escopo global e local, mesmo que ambas tenham o mesmo nome pois a variável é do tipo let e não do tipo var.

console.log(algumPensamento)
console.log(dizAlgo(algumPensamento))
console.log(dizAlgo)

// outro exemplo de escopo de funcoes 

let pensar 

function criarPensar () {
    pensar = "segunda - feira"
    return pensar
}

console.log(pensar) // neste exato momento a variável não tinha nenhum valor, então logo retornou undefined
console.log(criarPensar()) // já aqui, o return da função trouxe o  valor de pensar
console.log(pensar) // a variável sobrescreveu o console.log acima
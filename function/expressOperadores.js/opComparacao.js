// operadores de comparação , irá comparar e retornar um valor boolean (true ou false) em resposta

// operadores de igual (... == ...)
let one = 1
let two = 2
console.log(one == two)

// operadores de diferente (... != ...)
let n1 = 5
let n2 = 7
console.log(n1 != n2)

/* operadores de comparação estritamente igual e estritamente diferente (...===...)

- estritamente significa que o operador irá comparar o valor e tambem o seu tipo de dado como por exemplo: string, boolean, number e etc...


*/
let m1 = 25
let m2 = "25"
console.log(m1 === m2) // obeserve ele retornou falso pq o valor da segunda variável está entre aspas, ou seja, é tratado como uma string

// operador maior que (... > ...)
let a1 = 25
let a2 = 8
console.log(a1 > a2)

// operador maior e igual a (... >= ...)
let b1 = 44
let b2 = 44
console.log(b1 >= b2)

// operador menor que (... < ...)
let c1 = 12
let c2 = 10
console.log(c1 < c2)

// operador menor igual a (... <= ...)
let d1 = 4
let d2 = 5 
console.log(d1 <= d2)

/* operadores de atribuição

(+= , -= , *= , /= )

*/

/* operadores lógicos

AND && , espera uma comparação que ambas o resultado tem que ser verdadeiro para retornar TRUE
OR || , espera uma comparação que apenas um resultado verdadeiro já é o sulficiente para retornar TRUE
NOT ! , nega o valor do item atual

*/

/* operador condicional (ternário)

- dependendo da condição passada, receberemos valores diferentes
EXP: condição = então valor 1 se não valor 2
     condição = ? valor 1 : valor 2
*/ 

// exemplos:

let maiorDeIdade = true
let tiverCarteira = true

const habilitacao = maiorDeIdade && tiverCarteira ? "pode dirigir" : "não pode dirigir"
console.log(habilitacao)

/* falsy e truthy

falsy: Quando um valor é considerado falso em contextos onde um boolean é obrigatório ( condicionais e loops )

truthy: Quando um valor é considerado verdadeiro em contextos onde um boolean é obrigatório ( condicionais e loops )

*/
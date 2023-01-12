//1-

let notas = 59

if(notas >= 90) {
    console.log("nota A")
} else if(notas >= 80){
    console.log("nota B")
} else if(notas >= 70){
    console.log("nota C")
} else if(notas >= 60){
    console.log("nota D")
} else {
    console.log("nota E")
}

//2- Crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com um saldo positivo pu negativo, segui do valor do saldo.

let gastoFamilia = {
    receitas: [1200, 1350.54, 502.55, 459.44, 150],
    despesas: [800, 893.55, 743.11, 10, 18.78]
}

function somaDasPropriedadesArry(Array){
    let total = 0

    for(let value of Array){
        total += value
    }
   
    return total
}

function calcularAsoma(){
    const calculaReceitas = somaDasPropriedadesArry(gastoFamilia.receitas)
    const calculaDespesas = somaDasPropriedadesArry(gastoFamilia.despesas)
    console.log(`valor total das receitas: ${calculaReceitas}`)
    console.log(`valor total das despesas: ${calculaDespesas}`)
    const valorSomado = calculaReceitas - calculaDespesas
    console.log(`saldo final: ${valorSomado}`)

    if(valorSomado >= 0) {
        console.log("Você tem um saldo positivo")
    } else {
        console.log("Você tem um saldo negativo")
    }
}

calcularAsoma()

/* 3- Crie uma função que receba uma string em Celsius ou Fahrenheit e faça a transformação de uma unidade para outra 

 C = (F - 32) * 5/9
 F = C * 9/5 + 32

*/

let tempCelsius = 20
let tempFahrenheit = 30

function transfCparaF(){
    const resultadoUm = (tempFahrenheit - 32) * 5/9
    console.log(`${tempCelsius} graus celsius para ${tempFahrenheit} graus fahrenheit é: ${resultadoUm} `)
}

transfCparaF()

function transfFparaC(){
    const resultadoDois = tempCelsius * 9/5 + 32
    console.log(`${tempFahrenheit} graus fahrenheit para ${tempCelsius} graus celsius é: ${resultadoDois}`)
}

transfFparaC()

// 3- 

const bookByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

// contando o número de categorias 
function contarNumeroDeCategorias() {
    const numeroDeCategorias = bookByCategory.length
    console.log(numeroDeCategorias)
    console.log(bookByCategory[0])
    console.log(bookByCategory[1])
}

contarNumeroDeCategorias()

// contando o número de livros em cada categoria
function contarNumeroDeLivrosPorCategoria() {
    // console.log(bookByCategory[0].books)
    const contarNumeroLivrosCategoria = bookByCategory[0].books
    console.log(contarNumeroLivrosCategoria.length)
}

contarNumeroDeLivrosPorCategoria()

// contando o número de autores 

/*

console.log(bookByCategory) // mostra no console todo o array
console.log(bookByCategory[0]) // mostra no console o indice [0] do array
console.log(bookByCategory[1]) // mostra no console o indice [1] do array
console.log(bookByCategory[0]["books"]) // mostra no console o indice [0] do array, na propriedade "books"
console.log(bookByCategory[1]["books"]) // mostra no console o indice [1] do array, na propriedade "books"
console.log(bookByCategory[1]["books"][2]["author"]) // mostra no console o indice [1] do array,  na propriedade "books" do seu indice 2 e propriedade "author"

*/

// função que mostra o número geral de autores no Array
function numeroDeAutoresGeral() {
    const numAutores = "author".length
    console.log(numAutores)
}

numeroDeAutoresGeral()


// criar função que conta o número de autores diferente
function contarAutores(){
    let authors = []

    for(let category of bookByCategory){
        for(let books of category.books){
            if(authors.indexOf(books.author) == -1) {
                authors.push(books.author)
            }
        }
    }
    console.log(`Total de autores é: ${authors.length}`)
}

contarAutores()

// mostrar livros do autor Augusto Cury
function booksOfAugustoCury(){
    let books = []

    for(let category of bookByCategory){
        for(let book of category.books){
            if(book.author === "Augusto Cury") {
                books.push(book.title)
            }
        }
    }
    console.log(`Total de livros do Augusto Cury é: ${books}`)
}

booksOfAugustoCury()

// transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor
function booksOfAuthor(author){
    let books = []

    for(let category of bookByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
        }
    }
    console.log(`livros do autor ${author}: ${books}`)
}

booksOfAuthor("Augusto Cury")


























































































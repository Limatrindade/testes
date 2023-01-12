// funções hoisting

digaMeuNome()

function digaMeuNome() {
    console.log("matheus")
}
// ou seja a engine do js faz o hoisting, jogando a declaração da função acima da chamada dela, não gerando nenhum tipo de problema.

// outro exemplo
falaMeuSobreNome()

const falaMeuSobreNome = function () {
    console.log("Lima")
}
// já desde forma, armazenando uma função em variáveis sendo elas const let e var, irá gerar um erro pois mesmo a engine do js fazendo o hoisting a variável será undefined no início do code.

// arrow function
const digaOi = () => {
    console.log("oi")
}

digaOi()

// exemplo errado









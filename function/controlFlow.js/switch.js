// switch , é muito parecido com if e else porém tem uma estrutura diferente

let espressao = "a"

switch (espressao) {
    case "a":
        console.log("a")
        break
    case "b":
        console.log("b")
         break
     default:
        console.log("default")
        break
}

// case siginifica o valor da variável
// break tem como objetivo verificar se o case foi verdadeiro, se caso for, ele sai do loop
// default executa em caso de nenhum item do loop for verdadeiro

// outro exemplo

function calculadora(numero1, operador, numero2){
    let result

    switch (operador){
        case "+":
            result = numero1 + numero2
            break
        case "-":
            result = numero1 - numero2
            break
        case "*":
            result = numero1 * numero2
            break
        case "/":
            result = numero1 / numero2
            break
    }

    return result
}

console.log(calculadora(8,"+",2))

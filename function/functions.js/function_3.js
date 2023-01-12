// callback function

// uma função callback é uma função passada a outra função como argumento, que é então invocada dentro da função externa para completar algum tipo de rotina ou ação.

function sayMyName(name) {
    console.log("antes de executar a função callback")

    name()

    console.log("depois de executar a função callback")
}

sayMyName(
    () => {
        console.log("executando a função callback")
    }
)

// outro exemplo
function sobreNome(nome) {
    console.log("meu primeiro nome é Matheus")

    nome()

    console.log("meu último nome é Lima")
}

sobreNome(
    () => {
        console.log("meu sobrenome é Trindade")
    }
)

// outro exemplo

function pilotosDeF1(piloto) {
    piloto()
}

pilotosDeF1(
    () => {
        console.log("O melho piloto de f1 é lewis hamilton")
    }
)


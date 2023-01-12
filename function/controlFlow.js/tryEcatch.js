// throw

function digaMeuNome(nome = '') {
    if(nome === ''){
        throw 'Nome é obrigatório'
    }

    console.log('não tem erro')
}

// try e catch
try{
    digaMeuNome()
} catch(e) {
    console.log(e)
}

/* 
    throw , irá lançar o erro
    try , irá capturar o erro
    catch , irá mostrar o erro
*/


// for...of , pega os indices da variável

let nome = 'Matheus'
let nomes = ['Pedro','Rodrigo','Carla','Rebeca']

for(let char of nome) {
    console.log(char)
}

for(let char of nomes) {
    console.log(char)
}

/* 
 o for...of percorre o indice do loops, podendo assim trabalhar com Arrays ou até mesmo com indices em uma string
*/
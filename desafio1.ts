/* Pergunta: Como podemos rodar isso em um arquivo .ts sem causar erros? 

let employee = {};
employee.code = 10;
employee.name = "John"; */



// Resposta: precisamos tipar um objeto quando o inicializamos, colocando uma variável nele:


let funcionario = {
    codigo: 10,
    nome: 'John'
};

//ou

let funcionario2: {codigo: number, nome: string} = {
    codigo: 10,
    nome: 'Lucas'
}




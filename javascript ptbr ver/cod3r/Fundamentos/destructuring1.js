const pessoa = {
    nome: 'Victor',
    idade: 20,
    endereco: {
        logradouro: 'Rua ABC',
        numero: '123'
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { endereco: { logradouro: log, numero, cep } } = pessoa
console.log(log, numero, cep)

//const { conta: { ag, num } } = pessoa
//console.log(ag, num)
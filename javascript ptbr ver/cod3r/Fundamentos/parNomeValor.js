// par nome/valor
const saudacao = 'Salve' // contexto léxico 1

function exec() {
    const saudacao = 'Opa' // Contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Victor',
    idade: '22',
    peso: '90',
    endereco: {
        rua: 'Avenida Abel Ferreira',
        numero: '950'

    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
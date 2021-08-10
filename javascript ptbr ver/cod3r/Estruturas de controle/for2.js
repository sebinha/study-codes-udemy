const notas = [1.2, 3.4, 5.6, 7.8, 9.0]

for (i in notas) {
    console.log(i, notas[i])
}

const pessoa = {
    nome: 'Victor',
    sobrenome: 'Fernandes',
    idade: '22',
    peso: '80'
}

for (atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
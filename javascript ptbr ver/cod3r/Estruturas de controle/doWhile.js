function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao //somente iniciada a variável, sem valor inicial!

do {
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opcão escolhida foi ${opcao}`)
} while (opcao != -1)

console.log('Finalizou')
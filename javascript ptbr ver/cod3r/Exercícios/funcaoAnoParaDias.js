function converterIdadeAnoParaDias(idade) {
    const dias = (idade * 365)
    return (`A sua idade em dias é: ${dias} `)
}

console.log(converterIdadeAnoParaDias(70))
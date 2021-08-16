function inverso(valor) {
    const tipo = typeof valor
    if (tipo === Boolean) {
        return (!valor)
    } else if (valor === 0) {
        return valor
    } else if (tipo == "number") {
        return -valor
    } else {
        return `booleano ou numero esperados, mas o parâmetro é do tipo ${tipo}`
    }
}

console.log(inverso("cu"))
function multiplicar(numero1, numero2) {
    let soma = 0
    if (numero1 === 0 || numero2 === 0) {
        return 0
    } else if (numero1 > 0 && numero2 > 0) {
        for (let i = 1; i <= numero2; i++) {
            soma += numero1
        }
        return `${soma}`
    } else {
        return `Inválido`
    }
}

console.log(multiplicar(5, 5))
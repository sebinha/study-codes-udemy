function estaEntre(numero, minimo, maximo, inclusivo) {
    if (numero < minimo && numero > maximo) {
        return true
    } else if (numero === minimo || numero === maximo && inclusivo === true) {
        return true
    } else {
        return false
    }
}

console.log(estaEntre(3, 150, 3, true))
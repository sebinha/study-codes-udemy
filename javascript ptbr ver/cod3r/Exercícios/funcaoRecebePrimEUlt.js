function receberPrimeiroEUltimoElemento(lista) {
    let listaNova = []
    listaNova.push(lista[0], lista[lista.length - 1])
    return listaNova
}

console.log(receberPrimeiroEUltimoElemento([7, 14, "olá"]))
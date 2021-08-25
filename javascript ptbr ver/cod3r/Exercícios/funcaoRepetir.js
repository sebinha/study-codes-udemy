

function repetir(repete, vezes) {
    let repetirArray = []
    for (let i = 0; i < vezes; i++) {
        repetirArray.push(repete)
    }
    return repetirArray
}

console.log(repetir("corra", 3))
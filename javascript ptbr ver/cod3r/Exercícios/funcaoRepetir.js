
const repetirArray = []
function repetir(repete, vezes) {
    for (let i = 0; i < vezes; i++) {
        repetirArray.push(repete)
    }
    return repetirArray
}

console.log(repetir(7, 3))
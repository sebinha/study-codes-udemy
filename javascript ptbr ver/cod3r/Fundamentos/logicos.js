function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    // const comprarTv32 = !!(trabalho ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // Operador binário

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log('1)', compras(true, true))
console.log('2)', compras(true, false))
console.log('3)', compras(false, true))
console.log('4)', compras(false, false))
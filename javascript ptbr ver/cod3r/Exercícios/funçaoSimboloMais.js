// function simboloMais(num) {
//     let i = 0
//     let mais = "+"
//     let mudanca = ""
//     while (i < num) {
//         i++
//         mudanca += mais
//     }
//     return mudanca
// }

// console.log(simboloMais(5))

function simboloMais(num) {
    let mudanca = ""
    for (let i = 0; i < num; i++)
        mudanca += '+'
    return mudanca
}

console.log(simboloMais(5))
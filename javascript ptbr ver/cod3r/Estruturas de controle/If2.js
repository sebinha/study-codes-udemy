function teste1(num) {
    if (num >= 7)
        console.log(num)
    // console.log("Final") -> fora do bloco If
}

// teste1(8)
// teste1(6)

function teste2(num) {
    if (num >= 7); { // cuidado com o ';' , não usar com as estruturas de controle
        console.log(num)
    }
}

teste2(8)
teste2(6)
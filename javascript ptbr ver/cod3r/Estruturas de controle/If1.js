function AprovadoOuNao(nota) {
    if (nota >= 7) {
        console.log("Aprovado com: " + nota)
    }
}

AprovadoOuNao(7)
AprovadoOuNao(6.9)

function seForVerdadeOuNao(valor) {
    if (valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeOuNao()
seForVerdadeOuNao(null)
seForVerdadeOuNao(undefined)
seForVerdadeOuNao(NaN)
seForVerdadeOuNao('')
seForVerdadeOuNao(0)
seForVerdadeOuNao(-1)
seForVerdadeOuNao(' ')
seForVerdadeOuNao('?')
seForVerdadeOuNao([])
seForVerdadeOuNao([1, 2])
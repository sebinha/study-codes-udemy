function calcularSalario(horasTrabalhadas, salarioPorHora) {
    const salario = (horasTrabalhadas * salarioPorHora)
    return (`Salário igual a ${salario}`)
}

console.log(calcularSalario(150, 4066))
// Higher Order Function 

// criar de forma literal
function fun1() { }

// Armazenar em um variável
const fun2 = function () { }

// Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3))

// Armazenar em um atributo de objetos
const obj = {}

obj.falar = function () { return "Salve" }
console.log(obj.falar())

// Passar função como parâmetro
function run(fun) {
    fun()
}

run(function () { console.log("Funcionando...") })

// Uma função pode retornar/conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}
soma(2, 3)(4)

const somando = soma(2, 3)
somando(4)
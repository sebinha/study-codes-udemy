var a = 3 // é possivel redeclarar
let b = 4 // crie variáveis usando let na maioria das vzs

var a = 30
b = 40 // <- se usar let para declarar apresenta erro

console.log(a, b)

a = 300
b = 400

console.log(a, b)

const c = 5
// c = 50 <- não pode modificar const
console.log(c)
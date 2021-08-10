let a = 1

global.b = 123
this.c = 456
this.d = 789
this.e = 000

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports == this)
console.log(module.exports)

// criando uma variavel sem var e let!

abc = 2 // não fazer isso
console.log(global.abc)

// module.exports = { c: 456, d: 789, e: 0 }
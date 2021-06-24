const nome = "Victor"

console.log(nome.charAt(0))
console.log(nome.charAt(9), " <- não gerou nada (null) ")
console.log(nome.charCodeAt(1)) // ascii
console.log(nome.indexOf('o'))
console.log(nome.substring(2))
console.log(nome.substring(0, 3))

console.log('Eu sou '.concat(nome).concat(" Fernandes!"))
console.log('Eu sou ' + nome + " Fernandes!")
console.log(nome.replace("o", 0))
console.log("Victor,Fernandes,Cardoso".split(','))


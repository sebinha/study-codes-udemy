const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [1, 2, 3, 4]
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[9, 8, 7], [1, 2, 3]]
console.log(nota)
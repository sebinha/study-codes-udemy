function sum(num1, num2) {
    return num1 + num2
}

function sub(num1, num2) {
    return num1 - num2
}

function multi(num1, num2) {
    return num1 * num2
}

function divis(num1, num2) {
    return num1 / num2
}

function calculator(num1, num2, operator) {
    return operator(num1, num2)
}

console.log(calculator(1, 2, sum))


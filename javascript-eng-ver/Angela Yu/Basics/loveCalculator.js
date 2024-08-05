function loveCalculator() {
    var name1 = prompt("Tell your name: ")
    var name2 = prompt("Tell her/his name: ")
    var lovePercentage = Math.random();
    lovePercentage = Math.floor(lovePercentage * 100) + 1
    return (`You two matched with ${lovePercentage}%`)
}
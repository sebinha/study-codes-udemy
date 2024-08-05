


let randomNumber1 = Math.ceil(Math.random() * 6)

let randomDiceNumber1 = "dice" + randomNumber1 + ".png"

let randomImageSource = "images/" + randomDiceNumber1

image1 = document.querySelector(".img1")

console.log(image1.setAttribute("src", randomImageSource))


let randomNumber2 = Math.ceil(Math.random() * 6)
switch (randomNumber2) {
    case 1:
        console.log(document.querySelector(".img2").setAttribute("src", "images/dice1.png"))
        break
    case 2:
        console.log(document.querySelector(".img2").setAttribute("src", "images/dice2.png"))
        break
    case 3:

        console.log(document.querySelector(".img2").setAttribute("src", "images/dice3.png"))
        break
    case 4:
        console.log(document.querySelector(".img2").setAttribute("src", "images/dice4.png"))
        break
    case 5:
        console.log(document.querySelector(".img2").setAttribute("src", "images/dice5.png"))
        break
    case 6:
        console.log(document.querySelector(".img2").setAttribute("src", "images/dice6.png"))
        break
}

if (randomNumber1 > randomNumber2) {
    console.log(document.querySelector("h1").innerText = "Player 1 Wins")
} else if (randomNumber2 > randomNumber1) {
    console.log(document.querySelector("h1").innerText = "Player 2 Wins")
} else {
    console.log(document.querySelector("h1").innerText = "Draw")
}
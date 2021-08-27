let gamePattern = []
let userClickedPattern = []
let buttonColours = ["red", "blue", "green", "yellow"]
let level = 0

// Generation Random Simon numbers, adding sound and animations on Simon's buttons 

function nextSequence() {
    userClickedPattern = []
    let randomNumber = Math.floor(Math.random() * 4)
    let randomButton = buttonColours[randomNumber].toString()
    level++
    $("h1").html("Level " + level);

    soundButton(randomButton)

    gamePattern.push(randomButton)

    $("." + randomButton).addClass("pressed")
    $("." + randomButton).animate({ opacity: 0 }, 100)
    setTimeout(() => {
        $("." + randomButton).animate({ opacity: 1 }, 100)
        $("." + randomButton).removeClass("pressed")
    }, 100)

    return randomNumber
}

// Creating button sounds

function soundButton(color) {
    let audio = new Audio("sounds/" + color + ".mp3")
    return audio.play()

}

// When pressed start the game, execute nextSequence() one time

$(document).one("keydown", function () {

    $("h1").html("Level 0");

    // On click, start choosing the right answer  

    $(".btn").on("click", function (event) {
        let chosenButton = event.currentTarget.id

        soundButton(chosenButton)

        // animation function

        function animatePress() {
            $("." + chosenButton).addClass("pressed")
            $("." + chosenButton).animate({ opacity: 0 }, 100)
            setTimeout(() => {
                $("." + chosenButton).animate({ opacity: 1 }, 100)
                $("." + chosenButton).removeClass("pressed")
            }, 100)
        }

        userClickedPattern.push(chosenButton)

        animatePress()

        // Checking if they are at the same level, after that start counting and comparing array lengths, if wrong shows a message and pressing any key the page restarts

        function checkAnswer(currentLevel) {

            console.log(gamePattern[currentLevel])
            if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
                console.log("Right")
                console.log(gamePattern, userClickedPattern)
                if (userClickedPattern.length === gamePattern.length) {
                    setTimeout(function () {
                        nextSequence();
                    }, 1000);

                }

            } else {
                console.log("Wrong")
                let wrongAudio = new Audio("sounds/wrong.mp3")
                wrongAudio.play()
                $("body").addClass("game-over");
                setTimeout(() => {
                    $("body").removeClass("game-over");
                }, 200);
                $("h1").html("Game Over, Press Any Key to Restart");
                $(document).keydown(function () {
                    location.reload()
                });
            }
        }

        checkAnswer(userClickedPattern.length - 1)

    })

    nextSequence()
});

// $("h1").css("color", "red")
// $("h1").css("font-size", "3rem")
$("h1").addClass("big-title margin-50")
// $("h1").text("Bye")

// $("button").html("<em>Hey</em>")
// console.log($("img").attr("src"))

// $("a").attr("href", "https://www.youtube.com")

// $("h1").click(function () {
//     $("h1").css("color", "red")
//     setTimeout(() => {
//         $("h1").css("color", "black")
//     }, 100)
// })

// $("button").click(function () {
//     $("h1").css("color", "blue");

// });

// $(document).keydown(function (e) {
//     $("h1").text(e.key)
// });

// $("h1").on("mouseover", function () {
//     $("h1").css("color", "yellow");
// });

// $("h1").before("<button> Test </button>");
// $("h1").after("<button> Test </button>");
// $("h1").prepend("<button> Test </button>");
// $("h1").append("<button> Test </button>");

$(document).click(function () {
    // $("h1").slideToggle();
    // $("h1").fadeToggle();
    // $("h1").toggle();
    $("h1").animate({ opacity: 0.5 });
});


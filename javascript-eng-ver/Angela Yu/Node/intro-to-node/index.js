// const fs = require("fs")

// fs.copyFileSync("file1.txt", "file2.txt")

var superheroes = require("superheroes")
var supervillains = require("supervillains")

var SuperHeroName = superheroes.random()

var SuperVillainName = supervillains.random()

console.log("Fight Selection: " + SuperHeroName + " vs " + SuperVillainName)
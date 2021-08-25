const HouseKeeper = function (yearsOfExperience, name, cleaningRepertoire) {
    this.yearsOfExperience = yearsOfExperience
    this.name = name
    this.cleaningRepertoire = cleaningRepertoire
    this.clean = function () {
        alert("Cleaning in progress...")
    }
}

let houseKeeper1 = new HouseKeeper(12, "Jane", ["lobby", "rooms", "baths"])

console.log(houseKeeper1.clean())
function lifeInWeeks(age) {

    /************Don't change the code above************/

    //Write your code here.
    var yearsLeft = 90 - age;
    z = Math.floor(yearsLeft * 12);
    y = Math.floor(yearsLeft * 52);
    x = Math.floor(yearsLeft * 365);
    console.log("You have " + x + " days, " + y + " weeks, and " + z + " months left.");
    /*************Don't change the code below**********/
}

lifeInWeeks(22)
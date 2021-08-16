function isLeap(year) {

    var i = 0
    var interpretation
    if ((year % 4) === 0) {
        i++
        if ((year % 100) === 0) {
            i--
            if ((year % 400) === 0) {
                i++
            }
        }
    }
    if ((i == 1) || (i == 2)) {
        interpretation = (`Leap year`)
    } else {
        interpretation = (`Not leap year`)
    }

    return interpretation
}
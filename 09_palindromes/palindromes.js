const palindromes = function (str) {
    let forwardStr = ""
    let backwardStr = ""

    for (let c of str) {
        if (c.toLowerCase() === c.toUpperCase()) {
            continue
        } else {
            forwardStr += c.toLowerCase()
        }
    }

    backwardStr = [...forwardStr]
    backwardStr = backwardStr.reverse()
    backwardStr = backwardStr.join("")

    if (forwardStr === backwardStr) {
        return true
    } else return false

};

// Do not edit below this line
module.exports = palindromes;

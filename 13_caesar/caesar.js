const caesar = function (str, shift) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === str[i].toUpperCase()) {
            newStr += str[i]
        } else {
            if (str.charCodeAt(i) <= 90 && str.charCodeAt(i) + shift > 90) {
                let wrap = ((str.charCodeAt(i) + shift - 90) % 26) + 64
                if (wrap === 64) wrap = 90
                newStr += String.fromCharCode(wrap)
            } else if (str.charCodeAt(i) <= 90 && str.charCodeAt(i) + shift < 65) {
                let wrap = 91 - ((65 - (str.charCodeAt(i) + shift)) % 26)
                if (wrap === 91) wrap = 65
                newStr += String.fromCharCode(wrap)
            } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) + shift > 122) {
                let wrap = ((str.charCodeAt(i) + shift - 122) % 26) + 96
                if (wrap === 96) wrap = 122
                newStr += String.fromCharCode(wrap)
            } else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) + shift < 97) {
                let wrap = 123 - ((97 - (str.charCodeAt(i) + shift)) % 26)
                if (wrap === 123) wrap = 97
                newStr += String.fromCharCode(wrap)
            } else {
                newStr += String.fromCharCode(str.charCodeAt(i) + shift)
            }
        }
    }
    return newStr
};

// Do not edit below this line
module.exports = caesar;

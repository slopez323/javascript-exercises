const fibonacci = function (num) {
    num = +num
    if (num === 1 || num === 2) {
        return 1
    } else if (num > 2) {
        let oldNum = 1
        let currNum = 1
        for (let i = 3; i <= num; i++){
            currNum += oldNum
            oldNum = currNum - oldNum 
        }
        return currNum
    } else return "OOPS"


};

// Do not edit below this line
module.exports = fibonacci;

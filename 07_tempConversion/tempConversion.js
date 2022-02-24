const ftoc = function(temp) {
let cel = ((temp - 32)*(5/9))
celStr = String(cel)
if (celStr.includes(".")){
return Number(cel.toFixed(1))
} else {
  return cel
}
};

const ctof = function(temp) {
let far = ((temp*(9/5))+32)
farStr = String(far)
if (farStr.includes(".")){
  return Number(far.toFixed(1))
  } else {
    return far
  }
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

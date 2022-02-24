const removeFromArray = function(array, ...items) {
    for (let i = 0; i < items.length; i++){
    let index = array.indexOf(items[i])
    if (index !== -1) array.splice(index,1)
    }
    return array

};

// Do not edit below this line
module.exports = removeFromArray;

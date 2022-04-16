const removeFromArray = function(arr, ...args) {
//check if array contains argument and return its position
for (let arg of args) {
    let pos = arr.indexOf(arg);
    if (pos !== -1) {
        arr.splice(pos, 1);
    }
    else if (pos == -1) continue;
}
return arr;
};

// Do not edit below this line
module.exports = removeFromArray;

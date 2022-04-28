const palindromes = function (str) {
    let lowered = str.toLowerCase();
    let arr = lowered.split('');
    let letterArr = [];
    for (let char of arr) {
        if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
            letterArr.push(char);
        }
    }
    let reversedArr = letterArr.slice().reverse();
    let origin = letterArr.join('');
    let reversed = reversedArr.join('');
    if (origin === reversed) return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;

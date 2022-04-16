const reverseString = function(str) {
    let reversedString = '';
    if(str) {
        let char = str.split('');
        for(i = char.length - 1; i >= 0; i--) {
            reversedString += char[i];
        }
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function(string, num) {
    let repeatString = '';
    if(num > 0) {
        for(let i = 1; i <= num; i++) {
            repeatString += string;
        }
    }
    else if(num < 0) {
        repeatString = 'ERROR';
    }
    return repeatString;
};

// Do not edit below this line
module.exports = repeatString;

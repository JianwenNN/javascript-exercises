const findTheOldest = function(arr) {
    for (let person of arr) {
        if (!person.yearOfDeath) {
            person.age = (new Date()).getFullYear() - person.yearOfBirth;
        }
        else person.age = person.yearOfDeath - person.yearOfBirth;

    }
    arr.sort(function(a, b) {
        return a.age - b.age;
    })
    return arr[arr.length - 1];
};
// Do not edit below this line
module.exports = findTheOldest;

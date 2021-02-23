// Creates variable myAge with my age
const myAge = 33;
// Early years
let earlyYears = 2;
// Calculates early years in dog years
earlyYears *= 10.5;
// Late years
let lateYears = myAge - 2;
// Calculates late years in dog years
lateYears *= 4;
// Calculates final age in dog years
const myAgeInDogYears = earlyYears + lateYears;
// Creates variable myName with my name
const myName = 'Tiago'.toLowerCase();
// Prints result
console.log(`My name is ${myName}.
I am ${myAge} years old in human years
which is ${myAgeInDogYears} years old in dog years`);
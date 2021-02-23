const input = "Today I'm going to learn how to code! Push!";
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

// Deals with capitalized text
const inputLower = input.toLocaleLowerCase();

// Loop iterating through inputLower string
for (let i = 0; i < inputLower.length; i++) {
    // Nested loop iterating through vowels array
    for (let j = 0; j < vowels.length; j++) {
        // Checks if it's a vowel
        if (inputLower[i] === vowels[j]) {
            // Checks if it's an 'e' or a 'u' and if so, doubles it into the resultArray
            if (inputLower[i] === 'e' || inputLower[i] === 'u') {
                resultArray.push(inputLower[i], inputLower[i]);
            // If it's not just pushes once
            } else {
                resultArray.push(inputLower[i]);
            }
        }
    }
}
console.log(resultArray.join('').toUpperCase());
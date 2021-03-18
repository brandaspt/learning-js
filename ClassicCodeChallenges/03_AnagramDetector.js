/*
Write a function that will accept any two strings as parameters.
Return “1” if they are anagrams.
Otherwise return "0".
*/

function areAnagrams(str1, str2) {
    // Format str1
    const cleanStr1 = str1
        .toLowerCase() // All lowercase
        .split("") // Create array with every char
        .filter(char => char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123) // Eliminate anything that's not [a-z]
        .sort() // Sort array
        .join("") // Join back to string

    // Apply same format to str2 as str1
    const cleanStr2 = str2
        .toLowerCase()
        .split("")
        .filter(char => char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123)
        .sort()
        .join("")

    // If formatted strings are equal they are anagrams, otherwise they are not
    return cleanStr1 === cleanStr2 ? 1 : 0
}

let first = "silenT9029384"
let second = "l i s t e n"
console.log(areAnagrams(first, second))

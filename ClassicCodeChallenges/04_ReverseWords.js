/*
Write a function that will take a given string and reverse the order of the words.
“Hello world” becomes “world Hello” and “May the Fourth be with you” becomes “you with be Fourth the May”
*/

function reverseWordsNoPunc(str) {
    return str.split(" ").reverse().join(" ")
}

console.log(reverseWordsNoPunc("May the Fourth be with you"))

/*
The string in question now has punctuation.
Write a function to reverse the order of words, but keep the punctuation in place.
"Hello world!" becomes “world Hello!”
“With you, be May the Fourth.” becomes “Fourth the, May be you With.”
*/

function reverseWordsPunc(str) {
    // Split string by word boundaries, i.e. separates sequences of alphanumeric chars from sequences of non-alphanumeric chars
    // E.g. 'with you, be may!' becomes ['with', ' ', 'you', ', ', 'be', ' ', 'may', '!']
    let originalArray = str.split(/\b/)
    const arrayLength = originalArray.length

    // Create new empty array with same length as originalArray
    let newArray = new Array(arrayLength)

    // Loop through originalArray
    for (let i = 0; i < arrayLength; i++) {
        // If current element starts with a non-alphanumeric char
        if (originalArray[i].match(/\W/)) {
            // Puts the element in the newArray on the same position as it is on the originalArray
            newArray[i] = originalArray[i]
            // Otherwise, i.e. if the current element is a word...
        } else {
            // Create a variable with the 'mirror' position, e.g. on an array with length 6: [5] mirrors [0], [4] mirrors [1] and [3] mirrors [2]
            let mirror = arrayLength - 1 - i
            // If the mirror position contains punctuation, i.e. non-alphanumeric chars, we can't touch it.
            // So we start going backwards on the originalArray until we find a word.
            while (originalArray[mirror].match(/\W/)) {
                mirror--
            }
            // Once we find a word on the originalArray we can put the current word on the new array on that position
            newArray[mirror] = originalArray[i]
        }
    }

    // Return newArray joined back as string
    return newArray.join("")
}

const str1 = "With you, be May the Fourth."
const str2 = "Hello9,,. world!!"

console.log(str1)
console.log(reverseWordsPunc(str1))
console.log(str2)
console.log(reverseWordsPunc(str2))

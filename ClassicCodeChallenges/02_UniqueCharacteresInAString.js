/*
Write a function that determines if any given string has all unique characters
If so, print “all unique”.
Otherwise, print “duplicates found.”
*/

function uniqueChars(str) {
    let result = "all unique"
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j < str.length; j++) {
            if (str[i] === str[j]) {
                result = "duplicates found"
                break
            }
        }
        if (result === "duplicates found") {
            break
        }
    }
    console.log(result)
}

uniqueChars("==============")
uniqueChars("some random string")
uniqueChars("abcdefghijklmnopqrstuvwxyz")
uniqueChars("12345")
uniqueChars("00")
uniqueChars("fsa")
uniqueChars("fdsa")
uniqueChars("ffff")
uniqueChars("fadsfasfasdf")

export const formatNumber = number => {
    // Create array of strings in the format of [integerPart, decimalPart]
    let numArr = String(number).split(".")

    // If integer part has more than 3 digits, starting 3 from the end, add a comma every 3 digits.
    for (let i = numArr[0].length - 3; i > 0; i -= 3) {
        numArr[0] = numArr[0].slice(0, i) + "," + numArr[0].slice(i)
    }

    // Join array back into string adding '.' and return
    return numArr.join(".")
}

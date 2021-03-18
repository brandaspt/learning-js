function removeDuplicates(array) {
    let newArray = [array[0]]
    array.forEach(function (element) {
        let isPresent = false
        for (let i = 0; i < newArray.length; i++) {
            if (element === newArray[i]) {
                isPresent = true
            }
        }
        if (!isPresent) {
            newArray.push(element)
        }
    })
    return newArray
}

console.log(removeDuplicates([2, 3, 4, 2, 6, 1, 8, 4, 9, 3, 9, 9, 8]))

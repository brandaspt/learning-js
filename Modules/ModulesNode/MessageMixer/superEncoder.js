// Import the encryptors functions here.
let { caesarCipher, symbolCipher, reverseCipher } = require("./encryptors.js")

const encodeMessage = str => {
    // Use the encryptor functions here.
    let firstEncode = caesarCipher(str, 4)
    let secondEncode = symbolCipher(firstEncode)
    let thirdEncode = reverseCipher(secondEncode)
    return thirdEncode
}

const decodeMessage = str => {
    // Use the encryptor functions here.
    let firstDecode = reverseCipher(str)
    let secondDecode = symbolCipher(firstDecode)
    let thirdDecode = caesarCipher(secondDecode, -4)
    return thirdDecode
}

// User input / output.

const handleInput = userInput => {
    const str = userInput.toString().trim()
    let output
    if (process.argv[2] === "encode") {
        output = encodeMessage(str)
    }
    if (process.argv[2] === "decode") {
        output = decodeMessage(str)
    }

    process.stdout.write(output + "\n")
    process.exit()
}

// Run the program.
process.stdout.write("Enter the message you would like to encrypt...\n> ")
process.stdin.on("data", handleInput)

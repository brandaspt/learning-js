const prompt = require("prompt-sync")({ sigint: true })

const hat = "^"
const hole = "O"
const fieldCharacter = "░"
const pathCharacter = "*"

class Field {
    constructor(field) {
        this._field = field
    }

    get field() {
        return this._field
    }

    print() {
        this.field.forEach(function (element) {
            console.log(element.join(""))
        })
    }

    isOutOfBounds(position) {
        const lastRow = this.field.length - 1
        const lastColumn = this.field[0].length - 1
        if (
            position[0] < 0 ||
            position[0] > lastRow ||
            position[1] < 0 ||
            position[1] > lastColumn
        ) {
            return true
        } else {
            return false
        }
    }

    isHole(position) {
        if (this.field[position[0]][position[1]] === hole) {
            return true
        } else {
            return false
        }
    }

    isHat(position) {
        if (this.field[position[0]][position[1]] === hat) {
            return true
        } else {
            return false
        }
    }

    isGameOver(position) {
        if (this.isOutOfBounds(position)) {
            console.log("Out of bounds! Game Over!")
            return true
        } else if (this.isHole(position)) {
            console.log("You fell down a hole! Game Over!")
            return true
        } else if (this.isHat(position)) {
            console.log("You found your hat! You Win!!!")
            return true
        } else {
            this.field[position[0]][position[1]] = pathCharacter
            this.print()
            return false
        }
    }

    play() {
        let gameOver = false
        let currentPos = [0, 0]
        this.print()
        while (!gameOver) {
            let direction = prompt("Which way? ")
            switch (direction) {
                case "u":
                    currentPos[0] -= 1
                    gameOver = this.isGameOver(currentPos)
                    break
                case "r":
                    currentPos[1] += 1
                    gameOver = this.isGameOver(currentPos)
                    break
                case "d":
                    currentPos[0] += 1
                    gameOver = this.isGameOver(currentPos)
                    break
                case "l":
                    currentPos[1] -= 1
                    gameOver = this.isGameOver(currentPos)
                    break
                default:
                    console.log("Invalid direction. Choose: u, r, d or l")
                    break
            }
        }
    }

    static generateField(height, width, percentage) {
        const fieldArea = height * width

        /* Finding number of holes needed according to percentage */
        const numberOfHoles = Math.floor(fieldArea * percentage)

        /* Check field validity */
        if (numberOfHoles > fieldArea - 2) {
            console.log("Invalid field, too many holes! Try again.")
            playGame()
        }

        /* Create a field with 'height' rows and 'width' columns, and fill every position with '░' */
        const field = new Array(height).fill(0).map(el => new Array(width).fill(fieldCharacter))

        /* Place path at 0,0 */
        field[0][0] = pathCharacter

        /* Place random hat making sure not at 0,0 */
        let randomY = Math.floor(Math.random() * height)
        let randomX = Math.floor(Math.random() * width)
        while (randomY === 0 && randomX === 0) {
            randomY = Math.floor(Math.random() * height)
            randomX = Math.floor(Math.random() * width)
        }
        field[randomY][randomX] = hat

        /* Placing holes only where there is a '░' */
        for (let i = 0; i < numberOfHoles; i++) {
            do {
                randomY = Math.floor(Math.random() * height)
                randomX = Math.floor(Math.random() * width)
            } while (field[randomY][randomX] != fieldCharacter)
            field[randomY][randomX] = hole
        }

        return field
    }

    static playGame() {
        const height = Number(prompt("Field height? "))
        const width = Number(prompt("Field width? "))
        const percentage = Number(prompt("Percentage of holes? [between 0 and 1] "))
        const field = new Field(Field.generateField(height, width, percentage))
        field.play()
    }

}

Field.playGame()

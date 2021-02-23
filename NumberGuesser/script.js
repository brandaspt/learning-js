let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random() * 10);

const compareGuesses = (humanGuess, computerGuess, target) => {
    if (Math.abs(humanGuess - target) <= Math.abs(computerGuess - target)) {
        return true;
    } else {
        return false;
    }
};

const updateScore = winner => {
    switch (winner) {
        case 'human':
            humanScore++;
            break;
        case 'computer':
            computerScore++;
            break;
    }
};

const advanceRound = () => currentRoundNumber++;



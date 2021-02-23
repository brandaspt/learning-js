// Function to get user choice. Deals with different capitalizations and checks for invalid choices.
const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (
        userInput === 'rock' ||
        userInput === 'paper' ||
        userInput === 'scissors' ||
        userInput === 'bomb'
    ) {
        return userInput;
    } else {
        console.log('Invalid choice. Please type: rock, paper or scissors.');
    }
};

// Function to randomly get computer choice. 0 is rock, 1 is paper, 2 is scissors.
const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
};

function determineWinner(userChoice, computerChoice) {
    // Checks if it's a tie
    if (userChoice === computerChoice) {
        return 'Draw!';
    }

    // Human chose bomb and auto wins
    if (userChoice === 'bomb') {
        return 'Human wins!';
    }

    // Human chose rock
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else {
            return 'Human wins!';
        }
    }

    // Human chose paper
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer wins!';
        } else {
            return 'Human wins!';
        }
    }

    // Human chose scissors
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        } else {
            return 'Human wins!';
        }
    }
}

function playGame() {
    const userChoice = getUserChoice('fork');

    // If user inputs invalid choice, getUserChoice prints 'Invalid choice', returns undefined and nothing else happens.
    if (userChoice) {
        const computerChoice = getComputerChoice();
        console.log(`Human is ${userChoice}.`);
        console.log(`Computer is ${computerChoice}.`);
        console.log(determineWinner(userChoice, computerChoice));
    }
}

playGame();

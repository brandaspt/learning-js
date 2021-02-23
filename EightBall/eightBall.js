let userName = 'Joana';

// Ternary expression to print a personalized greeting if there is a username or a generic greeting otherwise
userName ? console.log(`Hello, ${userName}`) : console.log('Hello!');

let userQuestion = 'Vou algum dia de ferias a Australia?';

// Ternary expression to print question with name if there is a username or without otherwise
userName ? console.log(`${userName} asked: ${userQuestion}`) : console.log(`The user asked: ${userQuestion}`);

/*
Generates random integer
0 <= randomNumber < 8
*/
const randomNumber = Math.floor(Math.random() * 8);
let eightBall = '';

// Switch statement to assign a message to eightBall depending on randomNumber
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
}

console.log(eightBall);
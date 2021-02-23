/*
Random integer
0 <= raceNumber < 1000
*/
let raceNumber = Math.floor(Math.random() * 1000);

let early = true;
let age = 25;

// Early adults receive a raceNumber >= 1000
if (early && (age > 18)) {
  raceNumber += 1000;
}

/*
If early adult runs at 9:30am
Else if late adult runs at 11:00am
*/
if (early && (age > 18)) {
  console.log(`Athlete ${raceNumber} runs at 9:30am.`);
} else if (!early && (age > 18)) {
  console.log(`Athlete ${raceNumber} runs at 11:00am.`);
}

/*
If youth runs at 12:30pm
Else if is 18 years old see registration desk
*/
if (age < 18) {
  console.log(`Athlete ${raceNumber} runs at 12:30pm.`);
} else if (age === 18) {
  console.log(`Athlete ${raceNumber} please see the registration desk.`);
}
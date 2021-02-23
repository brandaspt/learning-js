// Function that accpets the day of the week and returns the hours slept on that day
// Function Declaration
function getSleepHours(day) {
    switch (day) {
        case 'monday':
            return 7;
            break;
        case 'tuesday':
            return 7;
            break;
        case 'wednesday':
            return 7;
            break;
        case 'thursday':
            return 7;
            break;
        case 'friday':
            return 7;
            break;
        case 'saturday':
            return 7;
            break;
        case 'sunday':
            return 7;
            break;
    }
}

// Function that calculates the total amount of sleep hours of the week
// Arrow Function with implicit return
const getActualSleepHours = () =>
    getSleepHours('monday') +
    getSleepHours('tuesday') +
    getSleepHours('wednesday') +
    getSleepHours('thursday') +
    getSleepHours('friday') +
    getSleepHours('saturday') +
    getSleepHours('sunday');

// Function that calculate the ideal amount of sleep per week based on the user's ideal amount of sleep per night given as an argument
// Arrow Function with implicit return
const getIdealSleepHours = idealHours => idealHours * 7;

// Function that prints message depending on the amount of hours actually slept and the ideal amount of sleep hours
const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours(7);
    if (actualSleepHours === idealSleepHours) {
        console.log('You got a perfect amount of sleep!');
    } else if (actualSleepHours > idealSleepHours) {
        console.log(
            'You slept ' +
                (actualSleepHours - idealSleepHours) +
                ' more hour(s) than you needed this week. Get to work!'
        );
    } else {
        console.log(
            'You slept ' +
                (idealSleepHours - actualSleepHours) +
                ' less hour(s) than you needed this week. Get some rest!'
        );
    }
};

calculateSleepDebt();

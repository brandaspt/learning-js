// Temperature in Kelvin
const kelvin = 0;
// Converts temperature from kelvin to celsius
const celsius = kelvin - 273;
// Converts temperature from celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
// Converts temperature from celsius to newton
let newton = celsius * (33 / 100);
// Rounds down fahrenheit
fahrenheit = Math.floor(fahrenheit);
// Rounds down newton
newton = Math.floor(newton);
console.log(`${kelvin} Kelvin is:
    ${celsius} Celsius
    ${fahrenheit} Fahrenheit
    ${newton} Newton`);
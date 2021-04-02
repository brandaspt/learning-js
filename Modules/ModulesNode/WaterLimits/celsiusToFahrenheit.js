const {celsiusToFahrenheit} = require('./converters')

const celsiusInput = process.argv[2]
const fahrenheitValue = celsiusToFahrenheit(celsiusInput)

console.log(`${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`)
// Write a function that finds the sum of all prime factors 1.5k of a given number, n.

// 1 - Factorize n
//   store prime factors in array
//   smallest possible prime factor: 2
//   highest possible prime factor: n/2 - 1
// 2 - Sum all items in array of prime factors

function factorize(n) {
    let primeFactors = []
    if (n === 1) {
        primeFactors.push(n)
    }
    while (n > 1) {
        for (let i = 2; i <= n; i++) {
            if (n % i === 0) {
                primeFactors.push(i)
                n = n / i
                break
            }
        }
    }
    return primeFactors
}

const factorsArray = factorize(200)

console.log(factorsArray)
console.log(`Sum of factors: ${factorsArray.reduce((a, b) => a + b)}`)

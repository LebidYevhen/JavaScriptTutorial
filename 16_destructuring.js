function calculateValues(a, b) {
    return [
        a + b,
        a - b
    ]
}

const [sum, sub] = calculateValues(42, 10)

console.log(sum, sub)
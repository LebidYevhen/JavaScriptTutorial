const citiesRussia = ['Москва', 'Санкт-Петербург', 'Казань', 'Новосибирск']
const citiesEurope = ['Берлин', 'Прага', 'Париж']

const citiesRussiaWithPopulation = {
    Moscow: 20,
    SaintPetersburg: 8,
    Kazan: 5,
    Novosibirsk: 3
}

const citiesEuropeWithPopulation = {
    Moscow: 26,
    Berlin: 10,
    Prague: 3,
    Paris: 2
}

// Spread
// console.log(...citiesRussia)
// console.log(...citiesEurope)

// const allCities = [...citiesRussia, ...citiesEurope]
// const allCities = citiesRussia.concat(citiesEurope)
// console.log(allCities)

// console.log({...citiesRussiaWithPopulation})
// console.log({...citiesRussiaWithPopulation, ...citiesEuropeWithPopulation})
// console.log({...citiesEuropeWithPopulation, ...citiesRussiaWithPopulation})

// Practice
// const numbers = [5, 37, 42, 17]
// console.log(Math.max(5, 37, 42, 17))
// console.log(Math.max(...numbers))
// console.log(Math.max.apply(null, numbers))

// const divs = document.querySelectorAll('div')
// const nodes = [...divs]

// console.log(divs, Array.isArray(divs))
// console.log(nodes, Array.isArray(nodes))
// console.log(divs)

// Rest
function sum(a, b, ...rest) {
    return a + b + rest.reduce((a, b) => a + b, 0)
}

const numbers = [1, 2, 3, 4, 5]

// Spread!!
// console.log(sum(...numbers))

// const [a, b, ...others] = numbers

// console.log(a, b, others)

const person = {
    name: 'Max',
    age: 20,
    city: 'Moscow',
    country: 'Russia'
}

const {name, age, ...address} = person

console.log(name, age, address)
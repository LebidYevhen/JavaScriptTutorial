const people = [
    { name: 'Yevhen', age: 28, budget: 40000},
    { name: 'Elena', age: 17, budget: 3400},
    { name: 'Ihor', age: 49, budget: 50000},
    { name: 'Michail', age: 15, budget: 1800},
    { name: 'Vasilisa', age: 24, budget: 25000},
    { name: 'Viktoria', age: 38, budget: 2300}
]

// for (let i = 0; i < people.length; i++) {
//     console.log(people[i])
// }
//
// for (let person of people) {
//     console.log(person)
// }

// forEach
// people.forEach(function (person) {
//     console.log(person)
// })
// people.forEach(person => console.log(person))

// map
// const newPeople = people.map(person => `${person.name} (${person.age})`)
// console.log(newPeople)

// filter
// const filtered = people.filter(person => person.age > 18)
// console.log(filtered)

// reduce
// const sum = people.reduce((total, person) => total + person.budget, 0)
// console.log(sum)

// find
// const name = people.find(person => person.name === 'Yevhen')
// console.log(name)

// findIndex
// const index = people.findIndex(person => person.name === 'Yevhen')
// console.log(index)

//===============================================================================================================
const amount = people
    .filter(person => person.budget > 3000)
    .map(person => {
        return {
            info: `${person.name} (${person.age})`,
            budget: Math.sqrt(person.budget)
        }
    })
    .reduce((total, person) => total + person.budget, 0)

console.log(amount)
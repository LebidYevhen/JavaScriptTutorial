function calculateValues(a, b) {
    return [
        a + b,
        a- b,
        a * b,
        a / b
    ]
}

// const [sum, sub = 'Вычитания нет', mult, ...other] = calculateValues(42, 10)
//
// console.log(sum, mult, other, sub)

// Objects
const person = {
    name: 'Max',
    age: 20,
    address: {
        country: 'Ukraine',
        city: 'Kyiv'
    }
}

// const {
//     name: firstName = 'Без имени',
//     age,
//     car = 'Машины нет',
//     address: {country, city: homeTown},
// } = person

const {name, ...info} = person

// console.log(firstName, age, car, country, homeTown)
// console.log(name, info)

function logPerson({name: firstName = 'Имя не указано', age}) {
    console.log(name + ' ' + age)
}

logPerson(person)
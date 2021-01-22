// function createCalcFunction(n) {
//     return function() {
//         console.log(1000 * n)
//     }
// }
//
// const calc = createCalcFunction(2)()

// function createIncrementor(n) {
//     return function (num) {
//         return n + num
//     }
// }
//
// const addOne = createIncrementor(1)
// const addTen = createIncrementor(10)
//
// console.log(addOne(2))
// console.log(addOne(10))
//
// console.log(addTen(2))
// console.log(addTen(10))
//
// function urlGenerator(domain) {
//     return function (url) {
//         return `https://${url}.${domain}`
//     }
// }
//
// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')
//
// console.log(comUrl('google'))
//
// console.log(ruUrl('yandex'))


function bind(context, fn) {
    return function (...args) {
        fn.apply(context, args)
    }
}

function logPerson() {
    console.log(`person: ${this.name}, ${this.age}, ${this.job}`)
}

const person1 = {name: 'Yevhen', age: 28, job: 'Frontend'}
const person2 = {name: 'Vasya', age: 20, job: 'Backend'}

bind(person1, logPerson)()
bind(person2, logPerson)()
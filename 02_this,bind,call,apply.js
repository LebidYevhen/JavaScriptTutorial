function hello() {
    console.log('Hello', this)
}

const person = {
    name: 'Yevhen',
    age: 28,
    sayHello: hello,
    sayHelloWindow: hello.bind(window),
    logInfo: function (job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`)
        console.log(`Age is ${this.age}`)
        console.log(`job is ${job}`)
        console.log(`phone: ${phone}`)
        console.groupEnd()
    }
}

const lena = {
    name: 'Elena',
    age: 23,
}

// person.logInfo.bind(lena,'Frontend', '2-10-10')()
// person.logInfo.call(lena,'Frontend', '2-10-10')
person.logInfo.apply(lena, ['Frontend', '2-10-10'])


const array = [1, 2, 3, 4, 5]

// function multBy(arr, n) {
//     return arr.map(number => number * n)
// }

Array.prototype.multBy = function (n) {
    return this.map(el => el * n)
}

console.log(array.multBy(2))

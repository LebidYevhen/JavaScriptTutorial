const obj = {
    name: 'Yevhen',
    age: 28,
    job: 'developer'
}

const entries = [
    ['name', 'Yevhen'],
    ['age', 28],
    ['job', 'developer']
]

// console.log(Object.entries(obj))
// console.log(Object.fromEntries(entries))

const map = new Map(entries)

map
    .set('newField', 42)
    .set(obj, 'Value of Object')
    .set(NaN, 'Nan ??')

// console.log(map.get(NaN))
// map.delete('job')
// console.log(map.has('job'));
// console.log(map.size)
// map.clear()
// console.log(map.size)


// ======================

// for (let [key, value] of map) {
//     console.log(key, value)
// }

// for (let value of map.values()) {
//     console.log(value)
// }
//
// for (let key of map.keys()) {
//     console.log(key)
// }

// map.forEach((value, key, map) => {
//     console.log(key, value)
// })

// ============================

// const array = [...map]
// const array = Array.from(map)
// const mapObj = Object.fromEntries(map.entries())
//
// console.log(mapObj)

// ======================================

const users = [
    {name: 'Elena'},
    {name: 'Yevhen'},
    {name: 'Alex'}
]

const visits = new Map()

visits
    .set(users[0], new Date())
    .set(users[1], new Date(new Date().getTime() + 1000 * 60))
    .set(users[2], new Date(new Date().getTime() + 5000 * 60))

function lastVisit(user) {
    return visits.get(user)
}

console.log(lastVisit(users[1]))
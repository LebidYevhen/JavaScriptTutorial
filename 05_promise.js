console.log('Request data...')

// setTimeout(() => {
//     console.log('Preparing data...')
//
//     const backEndData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }
//
//     setTimeout(() => {
//         backEndData.modified = true
//         console.log('Data received', backEndData)
//     }, 2000)
// }, 2000)

// const p = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//             console.log('Preparing data...')
//             const backEndData = {
//                 server: 'aws',
//                 port: 2000,
//                 status: 'working'
//             }
//             resolve(backEndData)
//         }, 2000
//     )
// })
//
// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             resolve(data)
//         }, 2000)
//     })
// }).then(clientData => {
//     clientData.fromPromise = true
//     return clientData
// }).then(data => {
//     console.log('Modified', data)
// })
//     .catch(err => console.log('Error:', err))
//     .finally(() => console.log('Finally'))


const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log(`After 2 seconds`))
// sleep(4000).then(() => console.log(`After 4 seconds`))

Promise.all([sleep(2000), sleep(5000)]).then(() => {
    console.log('All promises')
})
Promise.race([sleep(2000), sleep(5000)]).then(() => {
    console.log('Race promises')
})
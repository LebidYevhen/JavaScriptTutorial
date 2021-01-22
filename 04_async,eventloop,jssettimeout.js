window.setTimeout(function () {
    console.log('Inside timeout, after 0 seconds')
}, 0)

console.log('start')

console.log('start2')

function timeout2sec() {
    console.log('timeout2sec')
}

window.setTimeout(function () {
    console.log('Inside timeout, after 5 seconds')
}, 5000)



window.setTimeout(timeout2sec,2000)

console.log('End')
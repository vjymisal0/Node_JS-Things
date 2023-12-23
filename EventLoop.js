// function fun1() {
//     setTimeout(() => console.log("I am Fun 1"), 2000)
//     process.nextTick(() => console.log("I am Process 1"))
//     setImmediate(() => console.log("I am Immediate 1"))
// }
// function fun2() {
//     console.log("I am Fun 2")
// }
// function fun3() {
//     console.log("I am Fun 3")
// }
// fun1()
// fun2()
// fun3()

// const fs = require('fs')
// setTimeout(() => console.log("I am Timeout"), 1000)    // This is an asynchronous function
// fs.readFile(__filename, () => {
//     console.log('I am File')
// })      // This is an asynchronous function


const EventEmitter = require('events')
const emitter = new EventEmitter()
// emitter.on('messageLogged', function () {
//     console.log('Listener called') 
// })
// emitter.emit('messageLogged')
emitter.on('checkPage', (data, status) => {
    console.log(`Status Code is ${status} and data is ${data.message}`)
})  // This is an event listener 
emitter.emit('checkPage', { message: "hello world" }, 200)  // This is an event emitter

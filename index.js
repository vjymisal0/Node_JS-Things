// const data = require('./example.js')
// console.log(data.name)

// const msg = require('./example.js')
// msg.sayHello()
// msg.sayThanks()


//exports

// const msg = require('./example.js')
// msg.sayHello()
// msg.sayThanks()

//os module
// const os = require('os')
// console.log(os.platform(), os.homedir())
// console.log(os.arch())
// console.log(os.hostname())
// console.log(os.type())
// console.log(os.release())
// console.log(os.uptime())
// console.log(os.userInfo())
// console.log(os.cpus())
// console.log(os.totalmem())

//path module
const path = require("path")
// console.log(__filename) //full path
// console.log(path.basename(__filename)) //filename only
// console.log(path.basename(__dirname))
// console.log(path.join('test', '/hello', 'file.txt'))
// console.log(path.join('hello', 'hello.txt'))

// const myPath = path.parse('/for/test/hello.txt')
// console.log(myPath)


//fs  module
const fs = require('fs')
// fs.readFile('file.txt', 'utf-8', (err, data => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log(data)
// }))

// const fileContent = fs.readFileSync('file.txt', 'utf-8')
// console.log(fileContent)


// fs.writeFile('file.txt', 'Hello World', (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("File written successfully")
// }
// )

// fs.writeFileSync('file1.txt', 'Hello World 123', 'utf-8')
// console.log("File written successfully")



// fs.mkdir('test', (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("Folder created successfully")
// }
// )


// fs.mkdirSync('test1')
// console.log("Folder created successfully")


// fs.rmdir('test', (err) => {

//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("Folder deleted successfully")
// }
// )



// fs.rmdirSync('test1')
// console.log("Folder deleted successfully")


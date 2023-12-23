const http = require('http')
const server = http.createServer((req, res) => {
    // if (req.url === '/') {
    //     res.write('Hello World')
    //     res.end("Hello  World")
    // }
    if (req.url === '/about') {
        res.write('About Page')
        res.end("About Page")
    }
})

server.listen(3000, 'localhost', () => {
    console.log('Listening for requests on port 3000')
})
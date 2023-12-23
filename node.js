const fs = require('fs')
const http = require('http')
const server = http.createServer((req, res) => {
    if (req.url !== '/') {
        return res.end()
    }
    // const file = fs.readFileSync('file1.txt')
    // return res.end(file)
    const readableStream = fs.createReadStream('file12.txt')
    readableStream.on('data', (chunk) => {
        res.write(chunk)
        console.log(chunk)
    })
    readableStream.on('end', () => {
        res.end()
    })
    readableStream.on('error', (err) => {
        console.log(err)
        res.statusCode = 500
        res.end('File not found')
    })

})
server.listen(3000, () => {
    console.log('listening')
})  

const { createServer } = require('node:http')

const port = 3000

const server = createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end("telegram-storage")
})

server.listen(port, () => {
    console.log(`server running at ${port} port`)
})
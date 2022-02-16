const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

const port = 3000
const host = '0.0.0.0'

app.get('*', (req, res) => {
    res.json({
        name: 'Test app'
    })
})

server.listen(port, host, () => {
    console.log(`Server started on http://${host}:${port}`)
})

const express = require('express')
const app = express()
const http = require('http')
const server = http.createServer(app)

app.get('*', (req, res) => {
    res.json({
        name: 'Test app'
    })
})

server.listen(3380)

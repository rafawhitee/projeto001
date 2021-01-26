const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

app.get('/teste', (req, res) => {
    res.json({id: 2, nome: "RAFAEL NUNES"})
})

server.listen(3000)

io.on('connection', socket => {
    console.log(`Usuário conectado ${socket.id}`)
})
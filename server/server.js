const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const server = require('http').Server(app)

// Configura o IO com Cors permitindo apenas para localhost:3000
const io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:3000']
    }
})

// Para colocar CORS nos serviços
const cors = require('cors')

// Coloca o Express para utilizar CORS
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false })) // x-www-form-urlencoded 
app.use(bodyParser.json()) // application/json

app.post('/notificarFront', (req, res) => {
    console.log(req.body);
    let mensagem = req.body.mensagem
    if (mensagem) {
        io.emit('notificarFront', mensagem)
        res.status(200).send()
    }
    res.status(400).send()
})

server.listen(3333)

let clientes = []
io.on('connection', (socket) => {
    console.log(`Usuário conectado ${socket.id}`)
    clientes.push(socket)

    io.on('disconnect', () => {
        console.log('Desconectadando...')
        let i = clientes.indexOf(socket)
        clientes.slice(i, 1)
    })

    io.on('teste', (data) => {
        console.log('chamou o teste', data)
    })

    console.log(clientes.length)
})
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
app.use(bodyParser.urlencoded({ extended: false })) // application/x-www-form-urlencoded 
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

let count = 0;
io.on('connection', (socket) => {
    console.log(`${socket.id} conectado!!!`)
    count++;

    socket.on('disconnect', () => {
        console.log(`${socket.id} desconectando!!!`)
        count--;
        console.log(`Total conectado: ${count}`)
    })

    console.log(`Total conectado: ${count}`)
})

server.listen(3333)

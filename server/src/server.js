// Requires das Libs
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const server = require('http').Server(app)

// Imports dos Resources
const NotificationResource = require('./resources/Notification')
const ToastResource = require('./resources/Toast')
const ZoomResource = require('./resources/Zoom')

// Configura o IO com Cors permitindo apenas para localhost:3000
const io = require('socket.io')(server, {
    cors: {
        origins: ['http://localhost:3000']
    }
})

// Para colocar CORS nos serviços
const cors = require('cors')
app.use(cors())

// Para poder pegar o body do Request
app.use(bodyParser.urlencoded({ extended: false })) // application/x-www-form-urlencoded 
app.use(bodyParser.json()) // application/json

// Resources de Notificar
app.post('/notificarFront', (req, res) => { 
    return NotificationResource.notificarFront(io, req, res)
})

// Resources de Toast (react-toast)
app.post('/toastFront', (req, res) => { 
    return ToastResource.toastFront(io, req, res)
})

// Zoom
app.get('/zoom/users', ZoomResource.getUsers)
app.get('/zoom/meet', ZoomResource.getMeets)
app.get('/zoom/meet/{idMeet}', ZoomResource.getMeetById)
app.post('/zoom/meet', ZoomResource.createMeet)
app.delete('/zoom/meet/{idMeet}', ZoomResource.deleteMeetById)

// Regras do Socket IO
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

// Sobe o servidor na porta 3333
server.listen(3333)
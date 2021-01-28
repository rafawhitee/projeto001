import { Button, Container } from '@material-ui/core'
import React, { useEffect } from 'react'
import './App.css'
import { notificar } from './utils/Notification'
import { io } from "socket.io-client"

const socket = io('http://localhost:3333')

function App() {

  function conectarWebSocket() {
    if (socket) {
      socket.on('notificarFront', (data: any) => {
        notificar(data)
      })
    }
  }

  function teste() {
    if (socket)
      socket.emit('teste', 'olá')
  }

  conectarWebSocket()

  return (
    <Container maxWidth='md'>
      <Button variant="contained" color="secondary" onClick={teste}>
        Sair do WebSocket
      </Button>
    </Container>
  )
}

export default App
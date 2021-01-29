import { Button, Container } from '@material-ui/core'
import React, { useEffect } from 'react'
import './App.css'
import { notificar } from './utils/Notification'
import { io } from "socket.io-client"

const socket = io('http://localhost:3333')

function App() {

  socket.on('notificarFront', (data: any) => {
    notificar(data)
  })

  function teste() {
    if (socket){
      console.log(socket)
      socket.emit('teste', 'olá')
    }
  }

  
  return (
    <Container maxWidth='md'>
      <Button variant="contained" color="secondary" onClick={teste}>
        Sair do WebSocket
      </Button>
    </Container>
  )
}

export default App
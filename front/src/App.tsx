import { Button, Container } from '@material-ui/core'
import React, { useEffect } from 'react'
import './App.css'
import { notificar } from './utils/Notification'
import { io } from "socket.io-client"
import Toast from './model/Toast'
import { toast } from 'react-toastify'

const socket = io('http://localhost:3333')

function App() {

  socket.on('notificarFront', (mensagem: string) => {
    notificar(mensagem)
  })

  socket.on('toastFront', (toastDto: Toast) => {
    switch(toastDto.tipo){
      case 'success': toast.success(toastDto.mensagem); break;
      case 'warning': toast.warning(toastDto.mensagem); break;
      case 'error': toast.error(toastDto.mensagem); break;
      case 'info': toast.info(toastDto.mensagem); break;
      case 'dark': toast.dark(toastDto.mensagem); break;
      default: toast.info(toastDto.mensagem); break;
    }
  })

  return (
    <Container maxWidth='md'>
      
    </Container>
  )
}

export default App
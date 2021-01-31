
import React, { useEffect, useMemo } from 'react'
import { toast } from 'react-toastify'
import { io } from 'socket.io-client'
import ToastDTO from './model/ToastDTO'
import Routes from './routes'
import { notificar } from './utils/Notification'

function App() {
  useEffect(() => {
    toast.info('Bem-vindo ao Projeto Estudo NodeJS + ReactJS!')
  }, [])

  return (
    <Routes />
  )
}

export default App
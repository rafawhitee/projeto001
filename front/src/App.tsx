import React, { useEffect } from 'react'
import './App.css'
import { notificar } from './utils/Notification'
import getSocket from './utils/SocketIO'

const socket = getSocket()

function App() {

  useEffect(() => {
    socket.on('notificarFront', (data: any) => {
      notificar(data)
    })
  }, [])

  return (
    <div className="App">
      
    </div>
  )
}

export default App
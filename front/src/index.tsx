import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { io } from 'socket.io-client'
import ToastDTO from './model/ToastDTO'
import { notificar } from './utils/Notification'
import theme from "./theme"
import { MuiThemeProvider } from '@material-ui/core'

const optionsToastContainer = {
  position: toast.POSITION.BOTTOM_LEFT,
  autoClose: 4000,
  hideProgressBar: false,
  limit: 8,
  closeButton: true,
  closeOnClick: false,
  draggable: false,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
}

const socket = io('https://testeapi.ngrok.io')

socket.on('notificarFront', (mensagem: string) => {
  notificar(mensagem)
})

socket.on('toastFront', (toastDto: ToastDTO) => {
  switch (toastDto.tipo) {
    case 'success': toast.success(toastDto.mensagem); break;
    case 'warning': toast.warning(toastDto.mensagem); break;
    case 'error': toast.error(toastDto.mensagem); break;
    case 'info': toast.info(toastDto.mensagem); break;
    case 'dark': toast.dark(toastDto.mensagem); break;
    default: toast.info(toastDto.mensagem); break;
  }
})

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <ToastContainer {...optionsToastContainer} />
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals()
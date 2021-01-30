import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

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

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer {...optionsToastContainer} />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals()
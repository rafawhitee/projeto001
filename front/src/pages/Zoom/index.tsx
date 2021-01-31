import { Button, Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { notificar } from '../../utils/Notification'
import { io } from "socket.io-client"
import ToastDTO from '../../model/ToastDTO'
import { toast } from 'react-toastify'
import { createMeeting } from '../../services/ZoomService'
import RetornoCreateMeet from '../../model/RetornoCreateMeet'

function App() {
    const socket = io(process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : '')
    const [abrirEmAba, setAbrirEmAba] = useState<boolean>(false)
    const [sourceIframe, setSourceIframe] = useState<string | undefined>(undefined)

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

    useEffect(() => {
        toast.info('Bem-vindo ao Projeto Estudo NodeJS + ReactJS!')
        return () => { }
    }, [])

    const criarMeet = async () => {
        console.log('chamou o criar meeting...')
        let meetCriado: RetornoCreateMeet | null = await createMeeting()
        console.log(meetCriado)
        if (meetCriado && meetCriado.start_url) {
            window.open(meetCriado.start_url, '_blank')
        }
    }

    return (
        <Container maxWidth='lg'>
            <Button color="secondary" variant="contained" onClick={criarMeet}> Teste </Button>
            <iframe src={sourceIframe} />
        </Container>
    )
}

export default App
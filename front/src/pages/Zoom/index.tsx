import { Button, Container } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { createMeeting } from '../../services/ZoomService'
import RetornoCreateMeet from '../../model/RetornoCreateMeet'

function Zoom() {
    const [abrirEmAba, setAbrirEmAba] = useState<boolean>(false)
    const [sourceIframe, setSourceIframe] = useState<string | undefined>(undefined)

    useEffect(() => {
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

export default Zoom
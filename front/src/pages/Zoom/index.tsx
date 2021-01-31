import { Button, Container, Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { createMeeting } from '../../services/ZoomService'
import RetornoCreateMeet from '../../model/RetornoCreateMeet'
import { toast } from 'react-toastify'

const useStyles = makeStyles({
    iframe: {
        width: "100%",
        height: '450px'
    },
});

function Zoom() {
    const classes = useStyles()
    const [meet, setMeet] = useState<RetornoCreateMeet | null>(null)

    useEffect(() => {
        return () => { }
    }, [])

    const criarMeet = async () => {
        let meetCriado: RetornoCreateMeet | null = await createMeeting()
        if (meetCriado && meetCriado.start_url) {
            toast.success('Meet criado com sucesso, aguarde...')
            setMeet(meetCriado)
            //window.open(meetCriado.start_url, '_blank')
        } else {
            toast.error('Ocorreu um erro ao começar o Meet')
        }
    }

    const listarMeets = async () => {
        console.log("testando..")
    }

    function renderizaIframe(): boolean {
        if (meet && meet.start_url)
            return true

        return false
    }

    function retornaSourceIframe(): string | undefined {
        let renderiza: boolean = renderizaIframe()
        if (renderiza)
            return meet?.start_url

        return undefined
    }

    return (
        <Container maxWidth='md'>
            <Grid container spacing={3} direction='column' justify='space-between'>

                {/* BUTTONS */}
                <Grid container xs={12} item spacing={2}>
                    <Grid item xs={6} wrap='wrap'>
                        <Button color="secondary" variant="contained" onClick={criarMeet}> Listar Meets </Button>
                    </Grid>

                    <Grid item xs={6}>
                        <Button color="secondary" variant="contained" onClick={criarMeet}> Criar Meet </Button>
                    </Grid>
                </Grid>

                {/* CONTEÚDO */}
                <Grid item xs={12}>
                    {renderizaIframe() && <iframe className={classes.iframe} src={retornaSourceIframe()} />}
                </Grid>
            </Grid>
        </Container>
    )
}

export default Zoom
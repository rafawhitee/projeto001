import { Button, Container, Grid, makeStyles } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getMeets, deleteMeet, createMeeting } from '../../services/ZoomService'
import RetornoCreateMeet from '../../model/RetornoCreateMeet'
import { toast } from 'react-toastify'
import RetornoMeet from '../../model/RetornoMeet'
import Meet from '../../model/Meet'
import GridMeet from '../../component/GridMeet'

const useStyles = makeStyles({
    iframe: {
        width: "100%",
        height: '450px'
    },
});

function Zoom() {
    const classes = useStyles()
    const [meets, setMeets] = useState<Meet[]>([]);
    const [meetSelecionado, setMeetSelecionado] = useState<Meet | null>(null);

    useEffect(() => {
        popularMeets();
        return () => { }
    }, [])

    const popularMeets = async () => {
        let meetsRetorno: RetornoMeet | null = await getMeets()
        console.log(meetsRetorno);
        if (meetsRetorno && meetsRetorno.page_size && meetsRetorno.meetings) {
            setMeets(meetsRetorno.meetings)
        } else {
            toast.error('Ocorreu um erro ao pegar os Meets')
        }
    }

    const atualizarMeets = async () => {
        toast.info('Atualizando meets...');
        await popularMeets();
    }

    const criarMeet = async () => {
        let meetCriado: RetornoCreateMeet | null = await createMeeting()
        if (meetCriado && meetCriado.start_url) {
            toast.success('Meet criado com sucesso')
            await atualizarMeets();
        } else {
            toast.error('Ocorreu um erro ao começar o Meet')
        }
    }

    const functionToDelete = async (meet: Meet) => {
        if (meet) {
            await deleteMeet(meet.uuid);
            toast.info('Atualizando meets...');
        }
    }

    return (
        <Container maxWidth='md'>
            <Grid container spacing={3} direction='row' justify='space-between'>

                {/* LISTA MEETS */}
                {meets && meets.map((currentMeet: Meet) => {
                    return (
                        <Grid item xl={3} md={6} lg={4}>
                            <GridMeet meet={currentMeet} deleteFunction={() => functionToDelete(currentMeet)} />
                        </Grid>
                    )
                })}

            </Grid>
        </Container>
    )
}

export default Zoom
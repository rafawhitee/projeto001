import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Meet from '../../model/Meet'
import MeetImage from '../../assets/imgs/zoomMeet.jpg'
import moment from 'moment'

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

interface GridMeetProps {
    meet: Meet;
    deleteFunction?: any;
}

const acessarMeet = (url: string): void => {
    if (url) {
        window.open(url, '_blank')
    }
}

const formatarDataHora = (createdAt: string): string => {
    if (createdAt) {
        let formatadoStr = moment(createdAt).format('DD/MM/YYYY hh:mm')
        return formatadoStr;
    }
    return createdAt;
}

const GridMeet: React.FC<GridMeetProps> = (props: GridMeetProps) => {
    const classes = useStyles();
    const { meet, deleteFunction } = props;
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={MeetImage}
                    title="Zoom Meet"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {meet.id}
                    </Typography>

                    <Typography variant="h6" color="textSecondary" component="p">
                        {formatarDataHora(meet.created_at)}
                    </Typography>
                </CardContent>

            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => acessarMeet(meet.join_url)}>
                    Acessar Meet
                </Button>

                <Button size="small" color="primary" onClick={() => {
                    if (deleteFunction) {
                        deleteFunction()
                    }
                }}>
                    Excluir
                </Button>
            </CardActions>

        </Card>
    );
}
export default GridMeet
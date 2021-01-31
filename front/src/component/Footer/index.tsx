import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderTop: `1px solid ${theme.palette.primary.main}`,
            width: '100vw',
            height: '100%',
        }
    }),
);

const Footer = () => {
    const classes = useStyles()
    return (
        <footer className={classes.main}>
            <h4> @2020 - Todos os Direitos reservados </h4>
        </footer>
    )
}

export default Footer
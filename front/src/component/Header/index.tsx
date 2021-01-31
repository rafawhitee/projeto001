import React, { useState } from 'react'
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles'
import { AppBar, Button, Grid, ListItemIcon, ListItemText, Menu, MenuItem, MenuProps, Toolbar, Typography } from '@material-ui/core'
import { Link, useHistory } from 'react-router-dom'
import { useContext } from 'react'
import AddIcon from '@material-ui/icons/Add'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import LogoReciclagem from '../../assets/img/logoReciclagem.jpg'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        toolbar: {
            flexGrow: 1,
            justifyContent: 'space-between'
        },
        divTitle: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
        },
        gridMenusDesktop: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        },
        gridMenusMobile: {
            display: 'none',
            [theme.breakpoints.down('sm')]: {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            },
        },
        gridPesquisar: {

        },
        iconSuaConta: {
            color: 'white',
            marginRight: '3px'
        },
        txtSuaConta: {
            color: 'white',
            fontWeight: 'bold',
            [theme.breakpoints.down('sm')]: {
                display: 'none',
            },
        }

    }),
);

const Header: React.FC = () => {
    const history = useHistory()
    const classes = useStyles()

    const [anchorElPaginas, setAnchorElPaginas] = useState<null | HTMLElement>(null)
    const handleClickPaginas = (event: React.MouseEvent<HTMLElement>) => setAnchorElPaginas(event.currentTarget)
    const handleClosePaginas = () => setAnchorElPaginas(null)

    const fecharMenus = (): void => {
        handleClosePaginas()
    }

    const goHome = (): void => {
        fecharMenus()
        history.push(`${process.env.REACT_APP_HOME}/home`)
    }

    const goZoom = (): void => {
        fecharMenus()
        history.push(`${process.env.REACT_APP_HOME}/zoom`)
    }

    const goGoogle = (): void => {
        fecharMenus()
        history.push(`${process.env.REACT_APP_HOME}/google`)
    }
    const getMenuPaginas = () => {
        return (
            <>
                <Button onClick={handleClickPaginas}>
                    <FormatListBulletedIcon fontSize="large" className={classes.iconSuaConta} />
                </Button>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorElPaginas}
                    autoFocus={false}
                    key='menuPaginas'
                    open={Boolean(anchorElPaginas)}
                    onClose={handleClosePaginas}>
                    <MenuItem onClick={goHome}>Home</MenuItem>
                    <MenuItem onClick={goZoom}>Zoom</MenuItem>
                    <MenuItem onClick={goGoogle}>Google</MenuItem>
                </Menu>
            </>
        )
    }

    return (
        <>
            <AppBar position="fixed" color="primary">
                <Toolbar className={classes.toolbar}>
                    <Grid container spacing={2} alignItems="center" justify="space-between">

                        {/* LOGO + TITULO */}
                        <Grid item xl={2}>
                            <Typography variant="h5">
                                Projeto Estudo
                            </Typography>
                        </Grid>

                        {/* MENUS */}
                        <Grid item xl={5} className={classes.gridMenusDesktop}>
                            <Button color="inherit" onClick={() => goHome()}>
                                Home
                            </Button>

                            <Button color="inherit" onClick={() => goZoom()}>
                                Zoom
                            </Button>

                            <Button color="inherit" onClick={() => goGoogle()}>
                                Google
                            </Button>
                        </Grid>

                        <Grid item xl={5} className={classes.gridMenusMobile}>
                            {getMenuPaginas()}
                        </Grid>

                    </Grid>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header
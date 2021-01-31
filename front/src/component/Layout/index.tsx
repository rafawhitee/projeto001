import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core'
import Header from '../Header'
import Footer from '../Footer'

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        main: {
            minHeight: "85vh",
            marginTop: "75px"
        },
    })
);

const Layout: React.FC = ({ children }) => {
    const classes = useStyles()
    return (
        <>
            <Header />
            <main className={classes.main}>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default Layout
import React from "react";
import { IconButton, makeStyles, Toolbar } from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';



const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent:  'center',
        alignItems: 'center',
        

    },
    appbar: {
        background: 'none',
        fontFamily: 'Concert one'
    },
    appbarWrapper: {
        width: '100%',
        margin: '0 auto',

    },
    appbarTitle: {
        flexGrow: '1',
        color: 'purple',
    },
    icon: {
        color: 'purple',
        fontSize: '2rem',
    },
    imgLogo: {
        
        margin: '0 auto',
    },
    container: {
        marginTop: '10%',

    }

    
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>Athenaeum</h1>
                    <IconButton>
                       <SortIcon className={classes.icon}/>    
                    </IconButton>
                </Toolbar>  
            </AppBar>
            <div className={classes.container}>
                <img className="imgLogo" src={`${process.env.PUBLIC_URL}/assets/logo-Purple.png`} alt="" height={500} width={500} />

            </div>
        </div>
    )
}

export default Header;

import React from "react";
import Header from "../Components/Header";

import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bookshelf2.jpg'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'

    }
}));

const LandingPage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
            <CssBaseline />
            <Header />
        </div>
    )
}

export default LandingPage;

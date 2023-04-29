import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    header: {
        fontSize: "xxx-large",
        marginBottom: "revert",
        fontStyle: "italic",
        fontFamily: "emoji",
        fontWeight: "bolder",
        fontFamily: "serif",
        color:"aliceblue",
        backgroundColor:"#84accf",
        marginBottom: "0px",
       display: "flex",
       textAlign: "center",
       justifyContent: "center"
     }
}));

function Header(){
    const classes = useStyles();
    return(
        <Typography className={classes.header}>AnyBooks</Typography>
    );
}

export default Header;
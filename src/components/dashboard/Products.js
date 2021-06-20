import React from 'react';
import { Typography, AppBar, Toolbar, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import AcUnitRoundedIcon from '@material-ui/icons/AcUnitRounded';

const useStyles = makeStyles({
    barIcon: {
        display: 'flex',
        justifyContent: 'space-between',
    }
});
const Products = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography>
                    <IconButton className={classes.barIcon}>
                        Haroon Abdulrazaq
                        <AcUnitRoundedIcon />
                    </IconButton>
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Products;

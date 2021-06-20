import React from 'react';
import { Grid } from '@material-ui/core';
 import Header from './Header';
 import Content from './Content';

 
const Products = () => {
    return (
        <Grid container direction="column">
            <Grid item>
                <Header />
            </Grid>
            <Grid item container>
                <Grid item xs={0} sm={2} />
                <Grid item xs={12} sm={11}>
                    <Content />
                </Grid>
                <Grid/>
            </Grid>
        </Grid>
    )
}

export default Products;

import React from 'react';
import { Grid } from '@material-ui/core';
import CoffeeCard from './CoffeeCard';


const Content = () => {
  return (
    <Grid container spacing={4}>
      <Grid item >
        <CoffeeCard xs={12} sm={6} md={4}/>
      </Grid>
      <Grid item >
        <CoffeeCard xs={12} sm={6} md={4}/>
      </Grid>
      <Grid item >
        <CoffeeCard xs={12} sm={6} md={4}/>
      </Grid>
      <Grid item >
        <CoffeeCard xs={12} sm={6} md={4}/>
      </Grid>
      <Grid item >
        <CoffeeCard xs={12} sm={6} md={4}/>
      </Grid>
      <Grid item >
        <CoffeeCard xs={12} sm={6} md={4}/>
      </Grid>
    </Grid>

  );
};

export default Content;

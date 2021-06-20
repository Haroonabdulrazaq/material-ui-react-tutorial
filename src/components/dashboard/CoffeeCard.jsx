import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, CardMedia, Avatar, CardActions, CardContent, Button, Typography, IconButton } from '@material-ui/core';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: 300,
    minWidth: 100,
    border: '1px solid #eee',
  }
});

const CoffeeCard = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <IconButton>
            <Avatar aria-label="recipe" >
              R
            </Avatar>
          </IconButton>
        }
        action={
          <IconButton aria-label="action-icon">
            <ShareIcon />
          </IconButton>
        }
        title= 'Shirmp and Complex Card'
        subheader= 'Jun, 20, 2031'
      />
      <CardMedia 
        aria-label="card-image"
        className={classes.media}
         // image="https://images.unsplash.com/photo-1574484284002-952d92456975?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
        image="https://images.unsplash.com/photo-1598532213919-078e54dd1f40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
        title= "Pallela Dish"
      />
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          This is the card content for all cards in this website
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Buy Now</Button>
        <Button size="small">Apply Coupon</Button>
      </CardActions>
    </Card>
  );
}

export default CoffeeCard;
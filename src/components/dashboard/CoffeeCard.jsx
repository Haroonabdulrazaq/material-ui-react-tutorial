import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardHeader, Avatar, CardActions, CardContent, Button, Typography, IconButton } from '@material-ui/core';
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
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CoffeeCard;
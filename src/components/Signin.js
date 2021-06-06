import React from 'react';
import { Grid, Paper, Avatar, TextField, Typography, Button, FormControlLabel, Checkbox, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { makeStyles } from  '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  images: {
    backgroundImage: 'url(https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8bG9ja3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)',//'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  submit: {
    display: 'block',
    width: '100%',
    margin: theme.spacing(3, 0, 2),
  },
  footer: {
    marginTop: theme.spacing(10),
  }
}));


const Signin = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root}>
      <CssBaseline/>
      <Grid item xs={false} sm={4} md={7} className={classes.images}> </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h6'>Sign in</Typography>
          <form className={classes.form}>
            <TextField
              margin='normal'
              id='password'
              fullWidth
              variant='outlined'
              label='Email'
              color='primary'
              name="email"
              autoComplete='email'
              required
            />
            <TextField
              margin='normal'
              id='password'
              fullWidth
              variant='outlined'
              label='Password'
              name='password'
              color='primary'
              autoComplete='current password'
              required
            />
            <FormControlLabel 
              label='Remember me'
              value='remember'
              control={<Checkbox value='remember' color='primary' />}
            />
            <Button
              color='primary'
              variant='contained'
              className={classes.submit} >
              Sign in
            </Button>
            <Grid container>
                <Grid item xs>
                  <Link href='#' variant="body2">Forgot Password?</Link>
                </Grid>
                <Grid item xs>
                  <Link href='#' variant="body2">Dont have an account?Sign up</Link>
                </Grid>
            </Grid>
          </form>
          <Grid>
            <Typography variant='body2' color="textSecondary" align="center" className={classes.footer}>
              Copyright © Your Website 2021.
            </Typography>
          </Grid>
        </div>

      </Grid>
    </Grid>
  )
}

export default Signin;

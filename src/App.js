import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import 'fontsource-roboto';

const useStyles= makeStyles({
  root: {
    background:'linear-gradient(top right, #0ae45b, #33eacb)',
    borderRadius: '3px',
    marginBottom: '10px',
    padding: '6px 19px'
  }
});

const theme = createMuiTheme({
  typography: {
    h2: {
      marginBottom: '16px',
    }
  },
  palette: {
    primary: {
      main: green[400],
    },
    secondary: {
      main: orange[400],
    } 
  }
});

const ButtonStyled =() => {
  const classes = useStyles();
  return (
    <Button className={classes.root}>Custom Button</Button>
  )
}

const CheckboxExample = () => {
  const [checked, setChecked] = useState(false);
  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={(e)=> setChecked(e.target.checked)}
          icon={<FavoriteBorder />}
          checkedIcon={<Favorite />}
        />
      }
      label={2}
    />
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container >
        <div className="App">
          <header className="App-header">
            <AppBar>
              <ToolBar>
                <IconButton>
                  <MenuIcon />
                </IconButton>
                <Typography>
                  MUI Themeing
                </Typography>
                <Button>Login</Button>
              </ToolBar>
            </AppBar>
            <Typography variant="h2" component="div">
              Welcome to MUI
            </Typography>
            <Typography variant="subtitle1">
              Learn Material UI
            </Typography>
            <ButtonStyled/>
            <Grid container spacing="2" justify="center">
              <Grid item xs={4} sm={6} md={4}>
                <Paper style= {{height: '75px', width:'100%'}} />
              </Grid>
              <Grid item xs={4} sm={12} md={4}>
                <Paper style= {{height: '75px', width:'100%'}} />
              </Grid>
              <Grid item xs={4} sm={6} md={12}>
                <Paper style= {{height: '75px', width:'100%'}} />
              </Grid>
            </Grid>
            <CheckboxExample/>
            <ButtonGroup variant="contained">
              <Button
                startIcon={<SaveIcon/>}
                variant="contained"
                color="primary"
              >
                Save
              </Button>
              <Button
                endIcon={<DeleteIcon/>}
                variant="contained"
                color="secondary"
              >
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;

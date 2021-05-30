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
import TextField from '@material-ui/core/TextField';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { orange, green } from '@material-ui/core/colors';

const useStyles= makeStyles({
  root: {
    background:'linear-gradient(top right, #0ae45b, #33eacb)',
    borderRadius: '3px',
    marginBottom: '10px',
    padding: '6px 19px'
  }
});

const theme = createMuiTheme({
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
      <div className="App">
        <header className="App-header">
          <ButtonStyled/>
          <TextField
            variant="outlined"
            label="Firstname"
          />
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
    </ThemeProvider>
  );
}

export default App;

import React, { Component } from 'react';
import { Paper,  Typography,  TextField,  Button, List, ListItem, ListItemText, ListItemSecondaryAction,  IconButton } from '@material-ui/core/';
import { withStyles, createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {  orange, green } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
// import './App.css';
import 'fontsource-roboto';

  const styles = {
    wrapper: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    root: {
      margin: 20,
      padding: 20,
      minWidth: 400,
    },
    form: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-evenly',
    },
    text: {
      textAlign: 'center',
      fontSize: 20,
      display: 'block',
    }
  }
  const theme = createMuiTheme({
    palette: {
      primary: green,
      secondary: orange,
    }
  })

export default withStyles(styles)(
  class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      exercises: [],
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange = (e) =>  {
  const {name, value} = e.target
  console.log(e.target.value);
    this.setState({ [name]: value });  
  }
  handleSubmit = (e) =>  {
    e.preventDefault();
    if (this.state.title) {
      this.setState(( { exercises, title }) => ({
        exercises: [...exercises, { id: Date.now(), title }],
        title: '',
      }));
    }
  }
  handleDelete = (id) =>  {
    this.setState(({exercises}) => ({
      exercises: exercises.filter((exercise)=> exercise.id !== id)
    }));
  }

  render() {
    const { title } = this.state;
    const { classes } = this.props;

    return (
      <MuiThemeProvider theme={theme} >
        <div className={classes.wrapper}>
          <Paper elevation={3} className={classes.root}>
            <Typography
              color="primary"
              variant='button'
              align='center'
              gutterBottom
              margin='normal'
              className={classes.text}
              >
              Exercises
            </Typography>
            <form onSubmit={this.handleSubmit} className= {classes.form} >
              <TextField
                // variant="outlined"
                label='Exercise'
                name='title'
                value={title}
                onChange={this.handleChange}
                margin='normal'
                autoComplete='none'
                autoFocus={false}
              />
              <Button color="primary" variant="contained" value="Submit" type="submit">Create</Button>
            </form>
            {/* {
              this.state.exercises.map((exercise)=> {
                const {item, id} = exercise;
                return(
                  <ul>
                    <li style={{color:'red'}}key={id}>
                      {item}
                    </li>
                  </ul>
                )
              })
            } */}
            <List> 
              {
                this.state.exercises.map(({ id, title }) => <ListItem key={id}>
                  <ListItemText primary={title} /> <ListItemSecondaryAction> 
                      <IconButton color='secondary' onClick={() => this.handleDelete(id)} > <DeleteIcon/> </IconButton>
                    </ListItemSecondaryAction>
                </ListItem> )}
            </List>
          </Paper>
        </div>
      </MuiThemeProvider>
    );
  }
});

// export default App;

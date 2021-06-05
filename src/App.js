import React, { Component } from 'react';
import { Paper,  Typography,  TextField,  Button, List, ListItem, ListItemText, ListItemSecondaryAction,  IconButton } from '@material-ui/core/';
// import Grid from '@material-ui/core/Grid';
// import Welcome from './components/Welcome';
import DeleteIcon from '@material-ui/icons/Delete';
import './App.css';
import 'fontsource-roboto';

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
    console.log(this.state.title);
    console.log('Result', this.state.exercises);
    const { title } = this.state;
    // const myStyle = {
    //   border: '1px solid red',
    //   background: 'black',
    // }
    return (
      <div style={{
        background: '#000',
       color: "red",
      }} >
        <Paper elevation={3}>
          <form onSubmit={this.handleSubmit}>
            <Typography
              color="primary"
              variant='button'
              align='center'
              gutterBottom
              margin='normal'>
              Exercises
            </Typography>
            <TextField
              placeholder="Exercise"
              variant="outlined"
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
    );
  }
};

export default App;
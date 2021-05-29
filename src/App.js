import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
// import SaveIcon from '@material-ui/icon/Save';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Button
        onClick={()=> alert(2+2)}
        variant="outlined"
        color="primary"
      >
        Hello world
      </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;

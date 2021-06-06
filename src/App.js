import React, { Component } from 'react';
import SignInSide from './components/Signin';
import './App.css';

class App extends Component {
  render() {
    console.log("Hello");
    return (
        <div>
          <SignInSide/>
        </div>
    );
  }
}
export default App;

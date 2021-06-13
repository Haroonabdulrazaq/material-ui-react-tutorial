import React, { Component } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import './App.css';

class App extends Component {
  render() {
    console.log("Hello");
    return (
        <div>
          <Dashboard/>
        </div>
    );
  }
}
export default App;

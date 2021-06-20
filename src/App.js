import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './components/dashboard/Dashboard';
import Products from './components/dashboard/Products';
import './App.css';

class App extends Component {
  render() {
    console.log("Hello");
    return (
        <div>
          <Route exact path="/" component={Dashboard} ></Route>
          <Route exact path="/products" component={Products} ></Route>
        </div>
    );
  }
}
export default App;

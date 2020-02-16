import React, { Component } from 'react';

import About from './components/About';
import Home from './components/Home';
import FormContainer from './components/FormContainer';

import {  Switch, Route } from 'react-router-dom'; // sets up routing
class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  
  render() {
    return (
      <div className="wrapper">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/form' component={FormContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;

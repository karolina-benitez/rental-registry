import React, { Component } from 'react';

import Home from './components/Home';
import UserForm from './components/UserForm';

// for routing 
import { Switch, Route } from 'react-router-dom';
class App extends Component {
  // constructor() {
  //   super();
  //   this.state = {}
  // }
  // not handling any state at the moment...
  render() {
    return (
      <div className="wrapper">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/form' component={UserForm} />
        </Switch>
      </div>
    );
  }
}

export default App;

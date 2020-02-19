import {Provider} from 'mobx-react';
import React, { Component } from 'react';

import About from './components/About';
import Home from './components/Home';
import FormContainer from './components/FormContainer';
import RentalDataStore from './rentalDataStore';

import {  Switch, Route } from 'react-router-dom'; // sets up routing

class App extends Component {
  constructor() {
    super();
    this.store = new RentalDataStore();
  }
  
  render() {
    return (
      <div className="wrapper">
        <Provider store={this.store}>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/form' component={FormContainer} />
          </Switch>
        </Provider>
      </div>
    );
  }
}

export default App;

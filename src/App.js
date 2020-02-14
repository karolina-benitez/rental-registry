import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { Button } from 'react-bootstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="homepage">
          <h1 className="homepage-title">California Rental Registry</h1>
          <hr/>
          <p className="homepage-body">
            <span>Welcome! If you are a landlord that owns five or more</span>
            <span>dwelling units, then you are required to submit a rental</span>
            <span>registry form for all of your properties.</span>
          </p>

          <Button className="submit-new-form">
            <span>Submit New</span>
            <span>Rental Registry Form</span>
          </Button>

        </div>
        <Footer />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';


class FormContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="homepage">
          <h1 className="homepage-title">Submit New Rental Registry Form</h1>
          <hr />
        
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default FormContainer

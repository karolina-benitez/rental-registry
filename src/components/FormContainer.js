import React, { Component } from 'react'
import Header from './Header';
import Footer from './Footer';

export class FormContainer extends Component {
  render() {
    return (
      <div class="wrapper">
        <Header />
        <div className="homepage">
          <h1 className="homepage-title">Submit New Rental Registry Form</h1>
          <hr />
          <p className="homepage-body">
            <span>Welcome!</span>
          </p>
        </div>
        <Footer />
      </div>
    )
  }
}

export default FormContainer;
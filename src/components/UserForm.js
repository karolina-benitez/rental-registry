import React, { Component } from 'react'
import NewRegistryButton from '../components/NewRegistryButton';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class Home extends Component {
  render() {
    return (
      <div class="wrapper">
        <Header />
        <div className="homepage">
          <h1 className="homepage-title">Submit New Rental Registry</h1>
          <hr />
          <p className="homepage-body">
            <span>Welcome!</span>
          </p>

          <NewRegistryButton />

        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
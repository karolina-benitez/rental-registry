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
          <h1 className="homepage-title">California Rental Registry</h1>
          <hr />
          <p className="homepage-body">
            <span>Welcome! If you are a landlord that owns five or more</span>
            <span>dwelling units, then you are required to submit a rental</span>
            <span>registry form for all of your properties.</span>
          </p>

          <NewRegistryButton />

        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;

import {inject, observer} from 'mobx-react';
import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewFormButton from './NewFormButton';
import AboutButton from './AboutButton';


const Home = inject('store')(observer(class Home extends Component {
  render() {
    return (
      <div class="wrapper">
        <Header />
        <div className="homepage">
          <h1 className="homepage-title">California Rental Registry</h1>
          <hr />
          <p className="homepage-body">
            <span>Welcome! If you are a landlord that owns five or more</span>
            <span>
              dwelling units, then you are required to submit a rental
            </span>
            <span>registry form for all of your properties.</span>
          </p>
          <div>
            <NewFormButton />
          </div>
          <br></br>
          <AboutButton />
        </div>
        <Footer />
      </div>
    );
  }
}));

export default Home;

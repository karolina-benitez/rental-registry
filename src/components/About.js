import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return <div class="wrapper">
    <Header />
    <div className="homepage">
      <h1 className="homepage-title">About</h1>
      <hr />
      <p className="homepage-body">
        <span>Blurb</span>
      </p>
    </div>
    <Footer />
  </div>
}
export default About

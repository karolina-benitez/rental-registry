import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NewFormButton from './NewFormButton'

const Thanks = () => {
  return <div class="wrapper">
    <Header />
    <div className="homepage">
      <h1 className="homepage-title">Thank you for Submitting Your Form</h1>
      <hr />
      <p className="homepage-body">
        <div>
          <NewFormButton />
        </div>
      </p>
    </div>
    <Footer />
  </div>
}

export default Thanks

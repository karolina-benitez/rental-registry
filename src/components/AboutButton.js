import React from 'react';
import { Button } from 'react-bootstrap';

import { Route } from 'react-router-dom';

const AboutButton = () => (
  <Route
    render={({ history }) => (
      <Button
        className="submit-new-form"
        onClick={() => {
          history.push('/about');
        }}
      > 
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          About
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
        <span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </span>
      </Button>
    )} // Note: just playing with non-breaking space above...
  />
);

export default AboutButton;

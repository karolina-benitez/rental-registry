import React from 'react';
import { Button } from 'react-bootstrap';

import { Route } from 'react-router-dom';

const NewFormButton = () => (
  <Route render={({ history }) => (
       <Button className="submit-new-form" onClick={() => { history.push('/form') }}>
        <span>Submit New</span>
        <span>Rental Registry Form</span>
      </Button>
  )} />
)

export default NewFormButton;

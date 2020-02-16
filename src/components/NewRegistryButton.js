import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export class NewRegistryButton extends Component {
  render() {
    return (
      <div>
        <Button className="submit-new-form" onClick="">
          <span>Submit New</span>
          <span>Rental Registry Form</span>
        </Button>
      </div>
    )
  }
}

export default NewRegistryButton;

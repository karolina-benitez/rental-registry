import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Form } from 'react-bootstrap';


class FormContainer extends Component {

  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="homepage">
          <h1 className="homepage-title">Submit New Rental Registry Form</h1>
          <hr />
          <Form>
            <Form.Group controlId='ownerName'>
              <Form.Text className='text-muted'> Owner </Form.Text>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder='first name' type="textarea" />
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder='last name' type="textarea" />
            </Form.Group>
          </Form>


        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default FormContainer

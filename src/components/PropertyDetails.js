import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';


export class PropertyDetails extends Component {


  saveAndContinue = (e) => {
    e.preventDefault()
    this.props.nextStep()
  }


  render() {
    const { values } = this.props;
    return (
      <React.Fragment>
      <Header />

      <Form>
        <h1>Owner</h1>
        <Form.Control as="textarea" placeholder='First name' onChange={this.props.handleChange('firstName')}
          defaultValue={values.firstName} />
        <Form.Label>First name</Form.Label>
        <Form.Control as="textarea" placeholder='Last name' onChange={this.props.handleChange('lastName')}
          defaultValue={values.lastName} />
        <Form.Label>Last name</Form.Label>
        <Form.Control as="select" onChange={this.props.handleChange('ownership')}>
          <option>Sole Ownership</option>
          <option>Joint Tenancy</option>
          <option>Tenancy in Common</option>
          <option>Tenants by Entirety</option>
          <option>Community Property</option>
        </Form.Control>
        <Form.Label>Ownership Type</Form.Label>
        <Form.Control as="textarea" placeholder='' onChange={this.props.handleChange('acquired')}
          defaultValue={values.acquired} />
        <Form.Label>Year of Acquisition</Form.Label>
        <br></br>
        <h1>Rental Property Address</h1>
        <Form.Control as="textarea" placeholder='' onChange={this.props.handleChange('street')}
          defaultValue={values.street} />
        <Form.Label>Street</Form.Label>
        <Form.Control as="textarea" placeholder='' onChange={this.props.handleChange('city')}
          defaultValue={values.city} />
        <Form.Label>City</Form.Label>
        <Form.Control as="select" onChange={this.props.handleChange('state')}>
          <option>CA</option>
          <option>FL</option>
          <option>CO</option>
        </Form.Control>
        <Form.Label>State</Form.Label>
        <Form.Control as="textarea" placeholder='' onChange={this.props.handleChange('zipcode')}
          defaultValue={values.zipcode} />
        <Form.Label>Zipcode</Form.Label>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <h2> Does this property have more than one unit?</h2>
          <Button className="submit-new-form" onClick={this.saveAndContinue}>
            <span>YES</span>
          </Button>
          <Button className="submit-new-form" onClick={this.saveAndContinue}>
            <span>NO</span>
          </Button>
      </Form>
      <br></br>
        <Footer />
      </React.Fragment>     
    )
  }
}

export default PropertyDetails

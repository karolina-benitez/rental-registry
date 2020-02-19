import {inject, observer} from 'mobx-react';
import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';


const UnitDetails = inject('store')(observer(class UnitDetails extends Component {

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
          <Button className="submit-new-form" onClick={this.saveAndContinue}>
            <span>Submit</span>
          </Button>
        </Form>
        <br></br>
        <Footer />
      </React.Fragment>
    )
  }
}));

export default UnitDetails

import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Createpan extends Component {
      state = {  }
      render() { 
            return ( 
<div className="section-empty">
  <br></br>
  <br></br>
  <br></br>
  <br></br>
    <div className="container content">
      <hr className="space m"/>
      <Row>
        <div className="col-md-6 col-center boxed-inverse shadow-1">
          <div className="alert" id="account-alert"></div>
          <div id="create-section">
            <h2>Create Account</h2>
            <Form className="form-box form-ajax" id="create-form">
              <FormGroup>
                <Label for="accountType">Account Type</Label>
                <Input type="text" name="accountType" id="accountType" disabled />
              </FormGroup>
              <Button className="btn1" size="lg" type="submit">
                Create Account
             </Button>
            </Form>
          </div>
          <div id="fund-section" >
            <h2 className="mr-t25">Fund Account</h2>
            <Form className="form-box form-ajax" id="fund-form">
              <FormGroup>
                <Label for="accountType">Amount</Label>
                <Input type="number" name="amount" id="amount" placeholder="Amount"
                  required />
              </FormGroup>
              <Input type="submit" className="btn1" value="Fund Account" id="fund-button"/>
              <center><Link to="/user/dashboard"><small>SKIP</small></Link></center>
            </Form>
          </div>
        </div>
      </Row>
      </div>
  
  </div>
             );
      }
}
 
export default Createpan;
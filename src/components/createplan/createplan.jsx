import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Createpan extends Component {
      state = {  }
      render() { 
            return ( 
<div class="section-empty">
  <br></br>
  <br></br>
  <br></br>
  <br></br>
    <div class="container content">
      <hr class="space m"/>
      <Row>
        <div class="col-md-6 col-center boxed-inverse shadow-1">
          <div class="alert" id="account-alert"></div>
          <div id="create-section">
            <h2>Create Account</h2>
            <Form class="form-box form-ajax" id="create-form">
              <FormGroup>
                <Label for="accountType">Account Type</Label>
                <Input type="text" name="accountType" id="accountType" disabled />
              </FormGroup>
              <Button color="primary" size="lg" type="submit">
                Create Account
             </Button>
            </Form>
          </div>
          <div id="fund-section">
            <h2>Fund Account</h2>
            <Form class="form-box form-ajax" id="fund-form">
              <FormGroup>
                <Label for="accountType">Amount</Label>
                <Input type="number" name="amount" id="amount" placeholder="Amount"
                  required />
              </FormGroup>
              <Input type="submit" value="Fund Account" id="fund-button"/>
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
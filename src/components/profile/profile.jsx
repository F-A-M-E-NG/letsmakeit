import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
class Profile extends Component {
      state = {  }
      render() { 
            return (
 <div class="section-empty">
    <div class="container content">
      <div class="d-flex">
        <h2>My Profile</h2>
      </div>
      <hr className="space m" />
      <div className="alert" id="profile-alert"></div>
      <hr className="space m"/>
      <div className="advs-box advs-box-multiple shadow-1"/>
        <div className="advs-box-content">
          <h4>Basic Profile</h4>
          <Form className="form-box form-ajax" id="basic-form">
          <Row>  
              <Col md={6}>
              <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input type="text" name="firstName" id="firstName" placeholder="First Name" />
              </FormGroup>
              </Col>
                <Col md={6}>
                <FormGroup>
                  <Label for="lastNmae">Last Name</Label>
                  <Input type="text" name="lastName" id="lastName" placeholder="Last Name" />
                </FormGroup>
              </Col> 
            </Row>
            <Row>  
                <Col md={6}>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input type="email" name="email" id="email" placeholder="Email" />
                </FormGroup>
                </Col>
                  <Col md={6}>
                  <FormGroup>
                    <Label for="phoneNumber">Phone Number</Label>
                    <Input type="tel" name="phoneNumber" id="phoneNumber" placeholder="Phone Number" />
                  </FormGroup>
                </Col> 
              </Row>
            <Button color="primary" size="md">Update Profile</Button>
          </Form>
        </div>

        <hr className="space" />
      <div className="advs-box advs-box-multiple shadow-1">
        <div className="advs-box-content">
          <h4>Contact Information</h4>
          <Form>
            <Row>
              <Col md={12}>
                <FormGroup>
                <Label for="address">Home Address</Label>
                <Input type="text" name="address" id="address" placeholder="Home Address" />
              </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                <Label for="city">City</Label>
                <Input type="text" name="city" id="city"  placeholder="City" />
              </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                <Label for="state">State</Label>
                <Input type="text" name="state" id="state" placeholder="State" />
              </FormGroup>
              </Col>
            </Row>
            <Button color="primary" size="md">Update Contact Information</Button>
          </Form>
        </div>
         <hr className="space"/>
      <div className="advs-box advs-box-multiple shadow-1">
        <div className="advs-box-content">
          <div className="d-flex">
            <h4>Bank Details</h4>
             <Button color="primary" size="md">Add New</Button>
          </div>
          <Form className="form-box form-ajax" id="bank-form">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleSelect">Bank</Label>
                  <Input type="select"  name="bank" id="bank">
                    <option value="" disabled selected hidden>Bank</option>
                    <option>1</option>
                    <option>2</option>
                  </Input>
                </FormGroup>

              </Col>
              <Col md={6}>
                 <FormGroup>
                    <Label for="accountNumber">Account Number</Label>
                    <Input  type="number" name="accountNumber" id="accountNumber" placeholder="Account Number" />
                  </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col  md={12}>
                  <FormGroup>
                    <Label for="accountName">Account Name</Label>
                    <Input  type="text" name="accountName" id="accountName" placeholder="Account Name" disabled required/>
                  </FormGroup>
              </Col>
            </Row>
            <Button color="primary" size="md">Save Bank Account</Button>
            <Button color="danger" size="md">Cancel</Button>
          </Form>
        </div>
      </div>
      </div>
      </div>
      </div> 
              );
      }
}
 
export default Profile;
// import React from 'react';
// import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

// const Example = (props) => {
//   return (
//     <Form>
//       <Row form>
//         <Col md={6}>
//           <FormGroup>
//             <Label for="exampleEmail">Email</Label>
//             <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
//           </FormGroup>
//         </Col>
//         <Col md={6}>
//           <FormGroup>
//             <Label for="examplePassword">Password</Label>
//             <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
//           </FormGroup>
//         </Col>
//       </Row>
//       <FormGroup>
//         <Label for="exampleAddress">Address</Label>
//         <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
//       </FormGroup>
//       <FormGroup>
//         <Label for="exampleAddress2">Address 2</Label>
//         <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
//       </FormGroup>
//       <Row form>
//         <Col md={6}>
//           <FormGroup>
//             <Label for="exampleCity">City</Label>
//             <Input type="text" name="city" id="exampleCity"/>
//           </FormGroup>
//         </Col>
//         <Col md={4}>
//           <FormGroup>
//             <Label for="exampleState">State</Label>
//             <Input type="text" name="state" id="exampleState"/>
//           </FormGroup>
//         </Col>
//         <Col md={2}>
//           <FormGroup>
//             <Label for="exampleZip">Zip</Label>
//             <Input type="text" name="zip" id="exampleZip"/>
//           </FormGroup>  
//         </Col>
//       </Row>
//       <FormGroup check>
//         <Input type="checkbox" name="check" id="exampleCheck"/>
//         <Label for="exampleCheck" check>Check me out</Label>
//       </FormGroup>
//       <Button>Sign in</Button>
//     </Form>
//   );
// }

// export default Example;
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

class Tokens extends Component {
  render() {
    let contents = (
      <Row>
            <br></br>
            <br></br>
        <Col lg={12} md={12} sm={12} className="col-xs-12">
          <div className="section-heading2">
            <h2>REGISTER PAGE</h2>
          </div>
        </Col>
        <Col lg={10} md={12} sm={12} className="col-xs-12 col-lg-offset-4">
          <Col lg={6} md={6} sm={6} className="col-xs-12">
            <div className="tokens">
              <div className="token-body">
              <div className="token-name">REGISTER</div>
                  
            <form id="register-form" class="form-box form-ajax">
              <div className="form-group">
                <label for="firstName">First Name</label>
                <input type="text" name="firstName" id="firstName" className="form-control form-value"
                  placeholder="First Name" />
              </div>
              <div className="form-group">
                <label for="lastName">Last Name</label>
                <input type="text" name="lastName" id="lastName" className="form-control form-value" placeholder="Last Name"
                  />
              </div>
              <div className="form-group">
                <label for="email">Email</label>
                <input type="email" name="email" id="email" className="form-control form-value" 
                  placeholder="Email" />
              </div>
              <div className="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" id="password" className="form-control form-value"
                  placeholder="Password" />
              </div>
              <Button  type="submit" className="btn3 mt-3" variant="dark">   
                  Register
              </Button>
            </form>
            <p className="text-center">Already have an account? <Link to="/login" className="para">Login</Link></p>
            <p className="text-center">By registering, you agree to our <a href="#" className="para" target="_blank"
                rel="noopener noreferrer">Terms and Conditions</a></p>
        
            </div>
            </div>
          
            </Col>
        </Col>
      </Row>
    )
    
    return (
      <div id="tokens" className="wd_scroll">
        <section className="tokens-area section">
          <Container>
            {contents}
          </Container>
        </section>
      </div>
    );
  }
}

export default Tokens;
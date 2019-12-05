import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

class Tokens extends Component {
  render() {
    let contents = (
      <Row>
            <br></br>
            <br></br>
      <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
      }}>

      
        <Col>
          <Col lg={12} md={12} sm={12} >
            <div className="tokens">
              <div className="token-body">
              <div className="token-name">REGISTER</div>
                  
            <form id="register-form" className="form-box form-ajax">
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
              <Button  type="submit" className="btn1 mt-3" variant="dark">   
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
        </div>
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
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
          <Col lg={12} md={12} sm={12}>
            <div className="tokens">
              <div className="token-body">
              <div className="token-name">Login</div>
                  <form id="login-form">
                        <div className="form-group">
                              <label for="email">Email</label>
                              <input type="email" name="email" id="email" className="form-control " placeholder="Email"/>
                        </div>
                        <div className="form-group">
                              <label for="password">Password</label>
                              <input type="password" name="password" id="password" className="form-control"
                              placeholder="Password"/>
                        </div>
                        <Button  type="submit" className="btn3 mt-3" variant="dark">   
                           Login
                        </Button>
                  </form>
                  <p className="text-center"><Link to="/password-reset" className="para">Forgot password?</Link></p>
                  <p className="text-center">Don't Have an account? <Link to="/register" className="para">Register</Link></p>
           
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
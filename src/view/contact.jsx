import React, { Component } from 'react';
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
              <div className="token-name">CONTACT US</div>
                  
            <form id="register-form" class="form-box form-ajax">
              <div className="form-group">
                <label for="firstName">Fullname</label>
                <input type="text" name="firstName" id="firstName" className="form-control form-value"
                  placeholder="First Name" />
              </div>
              <div className="form-group">
                <label for="lastName">Phone</label>
                <input type="text" name="lastName" id="lastName" className="form-control form-value" placeholder="Last Name"
                  />
              </div>
              <div className="form-group">
                <label for="password">Email</label>
                <input type="email" name="password" id="password" className="form-control form-value"
                  placeholder="Password" />
              </div>
              <div className="form-group">
                <label for="email">Message</label>
                <textarea  name="message" id="email" className="form-control form-value" >
                  
                  </textarea>
              </div>
              <Button  type="submit" className="btn3 mt-3" variant="dark">   
                  Send Message
              </Button>
            </form>
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
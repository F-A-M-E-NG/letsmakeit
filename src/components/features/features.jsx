import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import features1 from '../../assets/images/features/1.png';
import features2 from '../../assets/images/features/2.png';
import features3 from '../../assets/images/features/3.png';
import features4 from '../../assets/images/features/4.png';
import invest1 from '../../assets/images/invest1.jpg';
import invest2 from '../../assets/images/invest2.jpg';
import invest3 from '../../assets/images/invest3.jpg';
import invest4 from '../../assets/images/invest4.jpg';


class Features extends Component {
  render() {
    let con = (
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="section-heading2">
              <h3>INVESTMENTS</h3>
              <span style={{width:"10px", height:"5px", background:"red"}}></span>
              <h5>Our Investment Products</h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="featured-lists">
              <ul>
                <li>
                  <Col className="pd-0 hidden-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Bond Fund</h2>
                      <p>The Brass & Books Bond fund is a managed investment scheme invested primarily in debt instruments to provide intervention working capital for small and medium enterprises to meet liquidityand on-going business demands.
                        </p>
                      <Link to="/register" className="btn1">Get Started</Link>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-l">
                      <figure><img src={invest4} alt="" /></figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Lending</h2>
                      <p>Unique platform for lending and investment with a safety fund <br /> and cooperation with world-wide arbitration.</p>
                      <Link to="#" className="btn1">Get Started</Link>
                    </div>
                  </Col>
                </li>
                <li className="rl">
                  <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Growth Fund</h2>
                      <p>This fund provides financing, structure and mentorship for small and medium enterprises. We structure unique, individualised financing solutions using shareholders’ loans, equity, royalties and term loans – or any combination of these and provides value-added expert assistance whilst ensuring the funds of the investor is safe and yielding sustainable cashflow.
                      </p>

                      <Link to="#" className="btn1">Get Started</Link>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-r">
                      <figure><img src={invest2} alt="" /></figure>
                    </div>
                  </Col>
                  <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Exchange Money</h2>
                      <p>Exchange between all popular currencies with a couple of clicks.<br />Instant send from one currency to another.</p>
                      <Link to="#" className="btn1">Get Started</Link>
                    </div>
                  </Col>
                </li>
                <li>
                  <Col className="pd-0 hidden-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Premium Fund</h2>
                      <p>
                        The Brass & Books Premium Fund is a mid-term Investment vehicle 
                        for the discerning investor, providing a viable source of financing
                         for lower middle market companies in Africa.
                          Brass & Books Financial Services is actively raising a N1B fund that 
                          seeks to deploy N5m – 50m of growth capital investments in small and 
                          medium sized enterprises via the use of mezzanine debt and 
                          quasi-equity instruments to firms operating across West Africa.
                      </p>
                      <Link to="#" className="btn1">Get Started</Link>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-l">
                      <figure><img src={invest3} alt="" /></figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Premium Fund</h2>
                      <p>The Brass & Books Premium Fund is a mid-term Investment vehicle 
                        for the discerning investor, providing a viable source of financing
                         for lower middle market companies in Africa.
                          Brass & Books Financial Services is actively raising a N1B fund that 
                          seeks to deploy N5m – 50m of growth capital investments in small and 
                          medium sized enterprises via the use of mezzanine debt and 
                          quasi-equity instruments to firms operating across West Africa.
                      </p>
                      <Link to="#" className="btn1">Get Started</Link>
                    </div>
                  </Col>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    )
    if (this.props.animate) {
      con = (
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              <div className="section-heading2">
                <ReactWOW animation={this.props.animate} duration="1s">
                  <h2>Our Features</h2>
                </ReactWOW>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              <div className="featured-lists">
                <ul>
                  <li>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 hidden-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Lending</h2>
                          <p>Unique platform for lending and investment with a safety fund <br />and cooperation with world-wide arbitration.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure><img src={features1} alt="" /></figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Lending</h2>
                          <p>Unique platform for lending and investment with a safety fund <br /> and cooperation with world-wide arbitration.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li className="rl">
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Exchange Money</h2>
                          <p>Exchange between all popular currencies with a couple of clicks. <br />Instant send from one currency to another.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-r">
                          <figure><img src={features2} alt="" /></figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Exchange Money</h2>
                          <p>Exchange between all popular currencies with a couple of clicks.<br />Instant send from one currency to another.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0 hidden-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Investment</h2>
                          <p>Improved system of borrower's verification. Providing <br />verification services for other services.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure><img src={features3} alt="" /></figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Investment</h2>
                          <p>Improved system of borrower's verification. Providing <br />verification services for other services.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li className="rl">
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Online Wallet</h2>
                          <p>Keep your money, exchange your money, invest your money, pay <br />services and make purchases.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-r">
                          <figure><img src={features4} alt="" /></figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Online Wallet</h2>
                          <p>Keep your money, exchange your money, invest your money, pay  <br />services and make purchases.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      )
    }

    return (
      <div id="features" className="wd_scroll_wrap wd_scroll">
        <section className="features-area section">
          {con}
        </section>
      </div>
    );
  }
}

export default Features;
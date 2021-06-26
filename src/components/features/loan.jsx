import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";
import features1 from "../../assets/images/features/1.png";
import features2 from "../../assets/images/features/2.png";
import features3 from "../../assets/images/features/3.png";
import features4 from "../../assets/images/features/4.png";
import invest2 from "../../assets/images/invest2.jpg";
import invest3 from "../../assets/images/invest3.jpg";
import invest4 from "../../assets/images/invest4.jpg";

class Loans extends Component {
  render() {
    let con = (
      <Container>
        <Row>
          <br></br>
          <br></br>
          <br></br>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="section-heading2">
              <h3>LOANS</h3>
              <span
                style={{ width: "10px", height: "5px", background: "red" }}
              ></span>
              <h5>Our Loan Products</h5>
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
                      <h2>Item Package Loan</h2>
                      <p>
                        FUOSMCOS, as a foremost thrift and credit society in the
                        university community provides funds intervention
                        opportunities for members, who's membership is over six
                        months to acquire household appliances like washing
                        machine, refrigerator, TV set, deep freezer, generator,
                        electric cooker, fan, micro wave, bread toaster among
                        other electrical gadgets, at A-Z Mob, situated in Bay-
                        Bridge, Yenagoa, Bayelsa state. Their term of memorandum
                        of understanding enable eligible member's has board of
                        directors approval when apply for to buy any household
                        appliances from A-Z mob on behalf of FUOSMCOS and
                        repayment is deducted on monthly basis from member's
                        salary.
                      </p>
                      <Link to="/register" className="btn1">
                        Get Started
                      </Link>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-l">
                      <figure>
                        <img src={invest4} alt="" />
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Item Package Loan</h2>
                      <p>
                        FUOSMCOS, as a foremost thrift and credit society in the
                        university community provides funds intervention
                        opportunities for members, who's membership is over six
                        months to acquire household appliances like washing
                        machine, refrigerator, TV set, deep freezer, generator,
                        electric cooker, fan, micro wave, bread toaster among
                        other electrical gadgets, at A-Z Mob, situated in Bay-
                        Bridge, Yenagoa, Bayelsa state. Their term of memorandum
                        of understanding enable eligible member's has board of
                        directors approval when apply for to buy any household
                        appliances from A-Z mob on behalf of FUOSMCOS and
                        repayment is deducted on monthly basis from member's
                        salary.
                      </p>
                      <Link to="/register" className="btn1">
                        Get Started
                      </Link>
                    </div>
                  </Col>
                </li>
                <li className="rl">
                  <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Annual Loan</h2>
                      <p>
                        This loan is available for members who must have stayed
                        in the cooperative for six months such members are
                        granted the loan without collateral and it will be
                        deducted from your salary monthly.
                      </p>

                      <Link to="/register" className="btn1">
                        Get Started
                      </Link>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-r">
                      <figure>
                        <img src={invest2} alt="" />
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Annual Loan</h2>
                      <p>
                        This loan is available for members who must have stayed
                        in the cooperative for six months such members are
                        granted the loan without collateral and it will be
                        deducted from your salary monthly.
                      </p>

                      <Link to="/register" className="btn1">
                        Get Started
                      </Link>
                    </div>
                  </Col>
                </li>
                <li>
                  <Col className="pd-0 hidden-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Soft Loan</h2>
                      <p>
                        this is a intervention business loan for small and
                        medium enterprises in different sector of the economy
                        and it's take the duration of three months before
                        deduction is made from such member salary per month
                        until one has completely paid back. This type of loan
                        provide opportunity for business expansion and more
                        income avenue.
                      </p>
                      <Link to="/register" className="btn1">
                        Get Started
                      </Link>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-l">
                      <figure>
                        <img src={invest3} alt="" />
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Soft Loan</h2>
                      <p>
                        this is a intervention business loan for small and
                        medium enterprises in different sector of the economy
                        and it's take the duration of three months before
                        deduction is made from such member salary per month
                        until one has completely paid back. This type of loan
                        provide opportunity for business expansion and more
                        income avenue.
                      </p>
                      <Link to="/register" className="btn1">
                        Get Started
                      </Link>
                    </div>
                  </Col>
                </li>
                <li className="rl">
                  <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Material Loan</h2>
                      <p>
                        These is a type of loan available to members who
                        membership is over six months and it's also called land
                        package. It give members opportunity to acquire landed
                        properties purchase, survey and documented in the name
                        of the cooperative which later sell it to interested
                        members. Material loan take a period of three years
                        before repayment are taken at source from member's
                        salary
                      </p>

                      <Link to="/register" className="btn1">
                        Get Started
                      </Link>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-r">
                      <figure>
                        <img src={invest2} alt="" />
                      </figure>
                    </div>
                  </Col>
                  <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Material Loan</h2>
                      <p>
                        These is a type of loan available to members who
                        membership is over six months and it's also called land
                        package. It give members opportunity to acquire landed
                        properties purchase, survey and documented in the name
                        of the cooperative which later sell it to interested
                        members. Material loan take a period of three years
                        before repayment are taken at source from member's
                        salary
                      </p>
                      <Link to="/register" className="btn1">
                        Get Started
                      </Link>
                    </div>
                  </Col>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
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
                          <p>
                            Unique platform for lending and investment with a
                            safety fund <br />
                            and cooperation with world-wide arbitration.
                          </p>
                          <Link to="#" className="btn1">
                            read more
                          </Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure>
                            <img src={features1} alt="" />
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Lending</h2>
                          <p>
                            Unique platform for lending and investment with a
                            safety fund <br /> and cooperation with world-wide
                            arbitration.
                          </p>
                          <Link to="#" className="btn1">
                            read more
                          </Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li className="rl">
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Exchange Money</h2>
                          <p>
                            Exchange between all popular currencies with a
                            couple of clicks. <br />
                            Instant send from one currency to another.
                          </p>
                          <Link to="#" className="btn1">
                            read more
                          </Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-r">
                          <figure>
                            <img src={features2} alt="" />
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Exchange Money</h2>
                          <p>
                            Exchange between all popular currencies with a
                            couple of clicks.
                            <br />
                            Instant send from one currency to another.
                          </p>
                          <Link to="#" className="btn1">
                            read more
                          </Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0 hidden-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Investment</h2>
                          <p>
                            Improved system of borrower's verification.
                            Providing <br />
                            verification services for other services.
                          </p>
                          <Link to="#" className="btn1">
                            read more
                          </Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure>
                            <img src={features3} alt="" />
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Investment</h2>
                          <p>
                            Improved system of borrower's verification.
                            Providing <br />
                            verification services for other services.
                          </p>
                          <Link to="#" className="btn1">
                            read more
                          </Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li className="rl">
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Online Wallet</h2>
                          <p>
                            Keep your money, exchange your money, invest your
                            money, pay <br />
                            services and make purchases.
                          </p>
                          <Link to="#" className="btn1">
                            read more
                          </Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-r">
                          <figure>
                            <img src={features4} alt="" />
                          </figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Online Wallet</h2>
                          <p>
                            Keep your money, exchange your money, invest your
                            money, pay <br />
                            services and make purchases.
                          </p>
                          <Link to="#" className="btn1">
                            read more
                          </Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      );
    }

    return (
      <div id="features" className="wd_scroll_wrap wd_scroll">
        <section className="features-area section">{con}</section>
      </div>
    );
  }
}

export default Loans;

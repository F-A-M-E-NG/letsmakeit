import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";
import aboutimg from "../../assets/images/about/1.png";

class About extends Component {
  render() {
    let page = (
      <Row style={{ paddingTop: "10vh" }}>
        <Col lg={6} md={6} sm={12} className="col-xs-12">
          <div className="about-content">
            <h2 className="f-40 fw-400">About</h2>
            <p>
              Federal University Otuoke Staff multipurpose cooperative society
              was form in the year 2014, is a cooperative society that provides
              all members with convenient and secured means of interest. The
              cooperative society maintains the records of members, the
              accounting books and provide passbook for each member.
            </p>
            <div className="buttons">
              <Link to="/invest" className="btn1">
                Explore More
              </Link>
              <Link to="/register" className="btn3">
                Get Started!
              </Link>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} className="col-xs-12">
          <div className="about-img">
            <img src={aboutimg} alt="about" />
          </div>
        </Col>
      </Row>
    );
    if (this.props.animate) {
      page = (
        <Row>
          <Col lg={6} md={6} sm={12} className="col-xs-12">
            <div className="about-content">
              <ReactWOW animation={this.props.animate} duration="1s">
                <h2 className="f-40 fw-400">About</h2>
              </ReactWOW>
              <ReactWOW animation={this.props.animate} duration="1.3s">
                <p>
                  Federal University Otuoke Staff multipurpose cooperative
                  society was form in the year 2014, is a cooperative society
                  that provides all members with convenient and secured means of
                  interest. The cooperative society maintains the records of
                  members, the accounting books and provide passbook for each
                  member.
                </p>
              </ReactWOW>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} className="col-xs-12">
            <ReactWOW animation={this.props.animate} duration="1s">
              <div className="about-img">
                <img src={aboutimg} alt="about" />
              </div>
            </ReactWOW>
          </Col>
        </Row>
      );
    }
    return (
      <div id="about" className="wd_scroll_wrap wd_scroll">
        <div className="about-area pd-t70 pd-b100">
          <Container>{page}</Container>
        </div>
      </div>
    );
  }
}

export default About;

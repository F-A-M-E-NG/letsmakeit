import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import ReactWOW from 'react-wow';
import icon6 from '../../assets/images/business-shop.png';
import icon7 from '../../assets/images/investing.png';
import icon8 from '../../assets/images/loan.png';

class Projects extends Component {
  render() {
    const data = [
      {
        image: icon6,
        title: ["Savings", "Products"],
        url:"/savings",
        para: "Savings products that fit your short to long goals with next to none interest rates"
      },
      {
        image: icon7,
        title: ["investment", "Products"],
        url:"/invest",
        para: "Short to Long term investment products that matches your risk appetite"
      },
      {
        image: icon8,
        title: ["Loan", "Products"],
        url:"/loan",
        para: "Loans for individuals and groups; Working Capital financing for small to mid level businesses"
      }
    ]

    const Items = ({ image, title, para, dur, animate, url }) => {
      if (animate) {
        return (
          <Col lg={4} md={4} sm={6} className="col-xs-12">
            <ReactWOW animation={animate} duration={`${(dur + 1) - 0.3}s`}>
              <div className="project-list">
                <div className="content">
                  <span className="icons"><img src={image} alt="project" /></span>
                  <h3>{title[0]} <br />{title[1]}</h3>
                    <p>{para}</p>
                    <button style={{padding: 10, background: 'linear-gradient( to right, rgba(57, 100, 208, 1) 0%, rgba(45, 193, 201, 1) 100% )'}}><Link to={url} className="btn1">view All</Link></button>
                </div>
              </div>
            </ReactWOW>
          </Col>
        )
      } else {
        return (
          <Col lg={4} md={4} sm={6} className="col-xs-12">
            <div className="project-list">
              <div className="content">
                <span className="icons"><img src={image} alt="project" /></span>
                <h3>{title[0]} <br />{title[1]}</h3>
                <p>{para}</p>
                <button className='buttons' style={{padding: 8, background: 'linear-gradient( to right, rgba(57, 100, 208, 1) 0%, rgba(45, 193, 201, 1) 100% )', color: 'white'}}><Link to={url} className="btn1">view All</Link></button>
              </div>
            </div>
          </Col>
        )
      }
    }

    return (
      <div id="project" className="wd_scroll_wrap wd_scroll">
        <section className="projects bg-img pd-t100 pd-b70">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="col-xs-12 text-center">
                <div className="section-heading">
                  <ReactWOW animation='fadeInUp' duration="1s">
                    <h2>Advantage of the Project</h2>
                  </ReactWOW>
                </div>
              </Col>
            </Row>
            <Row>
              {
                data.map((obj, i) => (
                  <Items key={i} dur={(i + 1) * 0.3} image={obj.image} animate={this.props.animate} title={obj.title} para={obj.para} url={obj.url} />
                ))
              }
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Projects;
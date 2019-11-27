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
						<h2 className="f-40 fw-400">About The Project</h2>
						<p>
							Bit Money is a lending and investment, multicurrency and
							multifunctional online platform based on blockchain technology.
							There investors and borrowers meet each other and have the
							opportunity to lend money on mutually beneficial.
						</p>
						<p>
							Bit Money is a unique service that allows individuals to access
							loans from the comfort of their home in fiat currencies or
							crypto-currencies.
						</p>
						<p>
							Bit Money is a multi-functional platform which allows each
							participant to keep money in a multi-currency online wallet, buy
							and sell currency on the exchange, invest money, get a loan in a
							convenient currency.
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
								<h2 className="f-40 fw-400">About The Project</h2>
							</ReactWOW>
							<ReactWOW animation={this.props.animate} duration="1.3s">
								<p>
									Bit Money is a lending and investment, multicurrency and
									multifunctional online platform based on blockchain
									technology. There investors and borrowers meet each other and
									have the opportunity to lend money on mutually beneficial.
								</p>
							</ReactWOW>
							<ReactWOW animation={this.props.animate} duration="1.6s">
								<p>
									Bit Money is a unique service that allows individuals to
									access loans from the comfort of their home in fiat currencies
									or crypto-currencies.
								</p>
							</ReactWOW>
							<ReactWOW animation={this.props.animate} duration="1.9s">
								<p>
									Bit Money is a multi-functional platform which allows each
									participant to keep money in a multi-currency online wallet,
									buy and sell currency on the exchange, invest money, get a
									loan in a convenient currency.
								</p>
							</ReactWOW>
							<div className="buttons">
								<Link to="#" className="btn1">
									WHITEPAPER
								</Link>
								<Link to="#" className="btn3">
									Buy Tokens Now!
								</Link>
							</div>
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

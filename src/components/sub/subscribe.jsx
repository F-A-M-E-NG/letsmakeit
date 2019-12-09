import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
// import { Link } from "react-router-dom";
// import ReactWOW from "react-wow";

class Subscribe extends Component {
	render() {
		let contents = (
			<div>
				<Row>
					<Col lg={12} md={12} sm={12} className="col-xs-12">
						<div className="search_btm">
							<div className="search_main mr-b10">
								<form onSubmit={e => e.preventDefault()}>
									<input type="text" placeholder="enter your email address" />
									<button type="submit">subscribe</button>
								</form>
							</div>
						</div>
					</Col>
				</Row>
			</div>
		);

		return (
			<footer className="top-foo">
				<div className="">
					<Container>
						<Row>
							<Col lg={12} md={12} sm={12} className="col-xs-12">
								{contents}
							</Col>
						</Row>
					</Container>
				</div>
			</footer>
		);
	}
}

export default Subscribe;

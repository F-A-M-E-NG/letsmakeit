import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "./footer.css";

class Footer extends Component {
	constructor(props) {
		super(props);
		const date = new Date();
		this.year = date.getFullYear();
	}
	render() {
		return (
			<div className="foo-bot">
				<div className="p-5">
					<div className="mt-3 p-3">
						<Container className="p-5 mt-5" style={{ paddingTop: "" }}>
							<Row>
								<Col md={3}></Col>

								<Col md={6}>
									<h6 className="mt-5">
										No 62, Erepa Road, Yenizuegene, Yenagoa, Bayelsa State,
										Nigeria
									</h6>
									<div class="tag-row">
										<span>hello@bbmpcs.ng</span>
										<div className="line" />
										<span className="number">+2349030487810</span>
									</div>
								</Col>

								<Col md={3}></Col>
							</Row>
						</Container>
						<div className="footer-bottom-text">
							<Container>
								<Row
									style={{
										display: "flex",
										alignItems: "center",
										minHeight: "10vh"
									}}
								>
									<Col md={10}>
										<span>© 2019 BBMPCS</span>
									</Col>
									<Col>
										<span>
											Developed by{" "}
											<a class="para" href="http://safescrow.com.ng/">
												SafeScrow
											</a>
										</span>
									</Col>
								</Row>
							</Container>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Footer;

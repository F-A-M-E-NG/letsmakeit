import React, { Component } from "react";
import logo from '../../assets/images/logo/logo.png';
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
								<Col md={3}><img className="footer_logo" src={logo} alt="Logo" /></Col>

								<Col md={6}>
									<h6 className="mt-5">
									Federal University Otuoke, Adjacent SUG building, Bayelsa State
									</h6>
									<div class="tag-row">
										<span>info@fuosmcos.com</span>
										<div className="line" />
										<span className="number">+2348065831658</span>
									</div>
								</Col>

								<Col className="socials" md={3}>
									<Row style={{
										marginTop:"45"
									}}>
										<a rel="noopener noreferrer" href="http://facebook.com/" target="_blank"><i class="fa fa-facebook circle fa-facebk"></i></a>
										<a rel="noopener noreferrer" href="http://instagram.com/" target="_blank"><i class="fa fa-instagram circle fa-instag"></i></a>
										
									</Row>
								</Col>
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
										<span>© {new Date().getFullYear()} FUOSMCOS</span>
									</Col>
									<Col>
										{/* <span>
											Developed by{" "}
											<a class="para" href="http://safescrow.com.ng/">
												SafeScrow
											</a>
										</span> */}
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

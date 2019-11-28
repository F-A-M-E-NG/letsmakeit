import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";

class Steps extends Component {
	render() {
		let contents = (
			<React.Fragment>
				<section className="steps-area section">
					<Container>
						<Row>
							<br></br>
							<br></br>
							<br></br>
							<Col lg={11} md={11} sm={12} className="col-xs-12">
								<div className="steps-heading">
									<h2>Loans and Advances</h2>
									<div className="right-con">
										<span>Scroll Down</span>
										<Link to="/loan">
											<i className="fa fa-angle-down"></i>
										</Link>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
				<section className="steps-details">
					<Container>
						<Row>
							<Col
								lg={10}
								md={10}
								sm={12}
								className="col-xs-12 col-md-offset-1 col-lg-offset-1"
							>
								<div className="steps-cont">
									<ul>
										<li className="l-con">
											<div className="cont">
												<h2>Salary and Personal Loans</h2>
												<p>
													They are loans specially designed for the government
													and private sector employees who have regular or
													stable incomes. The deductions for repayments are
													taken at source from the employee’s salary.
												</p>
												<Link to="/register" className="btn2">Get Started!</Link>
											</div>
											<span>
												<i className="fa fa-users"></i>
											</span>
										</li>
										<li className="r-con">
											<div className="cont">
												<h2>Group Loans</h2>
												<p>
													They are loans that are available to groups,
													associations, corporate organizations, and
													individual-walk-ins. The group or associations would
													usually consist of 5 to 10 individual members that are
													granted specific sums as loans without collateral.
													Available to both regular and walk-in clients
												</p>
												<Link to="/register" className="btn1">Get Started!</Link>
											</div>
											<span>
												<i className="fa fa-check-square-o"></i>
											</span>
										</li>
										<li className="l-con">
											<div className="cont">
												<h2>Small Business Loans</h2>
												<p>
													BBMPCS, as a foremost Credit Union provides
													intervention working capital funds for small and
													medium enterprises in different sectors of the
													economy. These loans give businesses the opportunity
													to expand their business and generate more income{" "}
												</p>
												<Link to="/register" className="btn1">Get Started!</Link>
											</div>
											<span>
												<i className="fa fa-edit "></i>
											</span>
											<div className="mid-icons"></div>
										</li>
										<li className="r-con">
											<div className="cont">
												<h2>Structured Financing</h2>
												<p>
													Not all business models can fit into a regular loan
													structure for their financing needs. Our flexible
													structured financing products are customised to suit
													the needs of business at different stages in diverse
													industries.{" "}
												</p>
												<Link to="/register" className="btn1">Get Started!</Link>
											</div>
											<span>
												<i className="fa fa-university"></i>
											</span>
										</li>
									</ul>
								</div>
							</Col>
						</Row>
					</Container>
				</section>
			</React.Fragment>
		);
		if (this.props.animate) {
			contents = (
				<React.Fragment>
					<section className="steps-area section">
						<Container>
							<Row>
								<Col lg={11} md={11} sm={12} className="col-xs-12">
									<div className="steps-heading">
										<ReactWOW animation={this.props.animate} duration="1s">
											<h2>Few Steps For a Loan</h2>
										</ReactWOW>
										<div className="right-con">
											<span>Scroll Down</span>
											<Link to="#steps">
												<i className="fa fa-angle-down"></i>
											</Link>
										</div>
									</div>
								</Col>
							</Row>
						</Container>
					</section>
					<section className="steps-details">
						<Container>
							<Row>
								<Col
									lg={10}
									md={10}
									sm={12}
									className="col-xs-12 col-md-offset-1 col-lg-offset-1"
								>
									<div className="steps-cont">
										<ul>
											<li className="l-con">
												<ReactWOW animation={this.props.animate} duration="1s">
													<div className="cont">
														<h2>01. Registration On The Platform</h2>
														<p>
															Nam in lectus eget nisi aliquam ultrices. Aliquam
															at efficitur <br />
															nulla. Cras sodales eu nibh vel scelerisque.{" "}
														</p>
													</div>
												</ReactWOW>
												<span>
													<i className="fa fa-users"></i>
												</span>
											</li>
											<li className="r-con">
												<ReactWOW
													animation={this.props.animate}
													duration="1.3s"
												>
													<div className="cont">
														<h2>02. Passing Verification</h2>
														<p>
															Nam in lectus eget nisi aliquam ultrices. Aliquam
															at efficitur
															<br />
															nulla. Cras sodales eu nibh vel scelerisque.{" "}
														</p>
													</div>
												</ReactWOW>
												<span>
													<i className="fa fa-check-square-o"></i>
												</span>
											</li>
											<li className="l-con">
												<ReactWOW
													animation={this.props.animate}
													duration="1.6s"
												>
													<div className="cont">
														<h2>03. Creating An Application For a Loan</h2>
														<p>
															Nam in lectus eget nisi aliquam ultrices. Aliquam
															at efficitur
															<br />
															nulla. Cras sodales eu nibh vel scelerisque.{" "}
														</p>
													</div>
												</ReactWOW>
												<span>
													<i className="fa fa-edit "></i>
												</span>
												<div className="mid-icons"></div>
											</li>
											<li className="r-con">
												<ReactWOW
													animation={this.props.animate}
													duration="1.9s"
												>
													<div className="cont">
														<h2>04. Financing a Loan</h2>
														<p>
															Nam in lectus eget nisi aliquam ultrices. Aliquam
															at efficitur
															<br />
															nulla. Cras sodales eu nibh vel scelerisque.{" "}
														</p>
													</div>
												</ReactWOW>
												<span>
													<i className="fa fa-university"></i>
												</span>
											</li>
											<li className="l-con">
												<ReactWOW
													animation={this.props.animate}
													duration="2.1s"
												>
													<div className="cont">
														<h2>05. Activating a Loan</h2>
														<p>
															Nam in lectus eget nisi aliquam ultrices. Aliquam
															at efficitur <br />
															nulla. Cras sodales eu nibh vel scelerisque.{" "}
														</p>
													</div>
												</ReactWOW>
												<span>
													<i className="fa fa-bell"></i>
												</span>
											</li>
											<li className="r-con">
												<ReactWOW
													animation={this.props.animate}
													duration="2.4s"
												>
													<div className="cont">
														<h2>06. Receiving Funds</h2>
														<p>
															Nam in lectus eget nisi aliquam ultrices. Aliquam
															at efficitur <br />
															nulla. Cras sodales eu nibh vel scelerisque.{" "}
														</p>
													</div>
												</ReactWOW>
												<span>
													<i className="fa fa-paw"></i>
												</span>
											</li>
										</ul>
									</div>
								</Col>
							</Row>
						</Container>
					</section>
				</React.Fragment>
			);
		}
		return (
			<div id="steps" className="wd_scroll_wrap wd_scroll">
				{contents}
			</div>
		);
	}
}

export default Steps;

import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import ReactWOW from "react-wow";
import team1 from "../../assets/images/team/1.png";
import team2 from "../../assets/images/team/2.png";
import team3 from "../../assets/images/team/3.png";
import team4 from "../../assets/images/team/4.png";
import team5 from "../../assets/images/team/5.png";
import team6 from "../../assets/images/team/6.png";
import team7 from "../../assets/images/team/7.png";
import team8 from "../../assets/images/team/8.png";

class Teams extends Component {
	render() {
		const coreTeam = [
			{
				meamber: "Ajay Suryavanshi",
				position: "Co-Founder & CEO",
				image: team1,
				text:
					"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. "
			},
			{
				meamber: "Jeniffer Doe",
				position: "Co-Founder & CEO",
				image: team2,
				text:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum. "
			},
			{
				meamber: "Ariful Islam",
				position: "Co-Founder & CEO",
				image: team3,
				text:
					"Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words."
			},
			{
				meamber: "Maria Willium",
				position: "Co-Founder & CEO",
				image: team4,
				text:
					"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. There are many variations of passages."
			}
		];

		const advisorsTeam = [
			{
				meamber: "Mason Liam",
				position: "Co-Founder & CEO",
				image: team5,
				text:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"
			},
			{
				meamber: "Jammy Doe",
				position: "Co-Founder & CEO",
				image: team6,
				text:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"
			},
			{
				meamber: "Daniel Matthew",
				position: "Co-Founder & CEO",
				image: team7,
				text:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"
			},
			{
				meamber: "Henry Jack",
				position: "Co-Founder & CEO",
				image: team8,
				text:
					"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less"
			}
		];

		const Items = ({ meamber, position, image, text, dur }) => {
			if (this.props.animate) {
				return (
					<ReactWOW animation={this.props.animate} duration={`${dur + 1}s`}>
						<Col lg={6} md={6} sm={6} className="col-xs-12">
							<div className="team-list">
								<div className="conte">
									<div className="dbox">
										<div className="dleft">
											<img src={image} alt="team member" />
										</div>
										<div className="dright">
											<div className="content">
												<h3>{meamber}</h3>
												<span>({position})</span>
												<ul>
													<li>
														<Link to="#">
															<i className="fa fa-facebook"></i>
														</Link>
													</li>
													<li>
														<Link to="#">
															<i className="fa fa-twitter"></i>
														</Link>
													</li>
													<li>
														<Link to="#">
															<i className="fa fa-linkedin"></i>
														</Link>
													</li>
												</ul>
											</div>
										</div>
									</div>
									<div className="con">
										<p>{text}</p>
									</div>
								</div>
							</div>
						</Col>
					</ReactWOW>
				);
			} else {
				return (
					<Col lg={6} md={6} sm={6} className="col-xs-12">
						<div className="team-list">
							<div className="conte">
								<div className="dbox">
									<div className="dleft">
										<img src={image} alt="team member" />
									</div>
									<div className="dright">
										<div className="content">
											<h3>{meamber}</h3>
											<span>({position})</span>
											<ul>
												<li>
													<Link to="#">
														<i className="fa fa-facebook"></i>
													</Link>
												</li>
												<li>
													<Link to="#">
														<i className="fa fa-twitter"></i>
													</Link>
												</li>
												<li>
													<Link to="#">
														<i className="fa fa-linkedin"></i>
													</Link>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div className="con">
									<p>{text}</p>
								</div>
							</div>
						</div>
					</Col>
				);
			}
		};

		return (
			<React.Fragment>
				<section className="team-area pd-t100 pd-b50">
					<div className="particles-team">
						<Container>
							<Row>
								<Col lg={12} md={12} sm={12} className="col-xs-12">
									<div className="section-heading2">
										{this.props.animate ? (
											<ReactWOW animation={this.props.animate} duration="1s">
												<h2>Core Team</h2>
											</ReactWOW>
										) : (
											<h2>Core Team</h2>
										)}
									</div>
								</Col>
							</Row>
							<Row>
								{coreTeam.map((obj, i) => (
									<Items
										key={i}
										dur={(i + 1) * 0.3}
										meamber={obj.meamber}
										position={obj.position}
										image={obj.image}
										text={obj.text}
									/>
								))}
							</Row>
						</Container>
					</div>
				</section>
				<section className="team2-area pd-t100 pd-b50">
					<div className="particles-team">
						<Container>
							<Row>
								<Col lg={12} md={12} sm={12} className="col-xs-12">
									<div className="section-heading2">
										{this.props.animate ? (
											<ReactWOW animation={this.props.animate} duration="1s">
												<h2>Our Advisors</h2>
											</ReactWOW>
										) : (
											<h2>Our Advisors</h2>
										)}
									</div>
								</Col>
							</Row>
							<Row>
								{advisorsTeam.map((obj, i) => (
									<Items
										key={i}
										dur={(i + 1) * 0.3}
										meamber={obj.meamber}
										position={obj.position}
										image={obj.image}
										text={obj.text}
									/>
								))}
							</Row>
						</Container>
					</div>
				</section>
			</React.Fragment>
		);
	}
}

export default Teams;

import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import ReactWOW from "react-wow";


class Teams extends Component {
	render() {
		const coreTeam = [
			{
				meamber: "Analytics & reporting",
				text:
					"Algolia’s analytics dashboard helps product teams better understand what their users are looking for most, as well as where they are hitting dead-ends most often. Tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismo."
			},
			
		];

		

		const Items = ({ meamber, position, image, text, dur }) => {
			if (this.props.animate) {
				return (
					<ReactWOW animation={this.props.animate} duration={`${dur + 1}s`}>
						<Col lg={6} md={6} sm={6} className="col-xs-12">
							<div className="team-list">
								<div className="conte">
									<div className="dbox">
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
									<div className="dright">
										<div className="content">
											<h3>{meamber}</h3>
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
			</React.Fragment>
		);
	}
}

export default Teams;

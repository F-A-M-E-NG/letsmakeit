import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import products from './content'


class Productdetails extends Component {

	state = {
		product:""
	}
	componentDidMount() {
		const AccountType = window.location.href.split("/")
		console.log(AccountType[4])
		this.setState({product:AccountType[4]})
	}
	render() {
		
		const product = products.filter(product => product.name ===this.state.product ? this.state.product:"" )
		console.log(product)
		
		let page = (
			<div>
			{ product ? product.map(data => 
			<div key={data.id} className="about-content" >
			<Row style={{ paddingTop: "10vh" }}>
				<h2 className="f-40 fw-400">{data.value}</h2>
				<Col lg={6} md={6} sm={12} className="col-xs-12 visible-xs">
					<div className="about-img">
						<img src={data.imgurl} alt="about" />
					</div>
				</Col>
				<Col lg={6} md={6} sm={12} className="col-xs-12">
					<div >
						<p>
							{data.description}
						</p>
						<p>
							{data.more}
						</p>
						
					</div>
				</Col>
				<Col lg={6} md={6} sm={12} className="col-xs-12 hidden-xs">
					<div className="about-img">
						<img src={data.imgurl} alt="about" />
					</div>
				</Col>
			</Row>
			<Row>
				<Col lg={12} md={12} sm={12} className="col-xs-12">
						<p>{data.more}</p>
						<div className="buttons mr-l10">
							<Link to={data.url} className="btn1">
								Get Started!
							</Link>
						</div>
				</Col>
			</Row>
			</div>
			) : null }
			</div>
		);
		
		return (
			// <div id="about" className="wd_scroll_wrap wd_scroll">
				<div className="about-area pd-t70 pd-b100">
					<Container>{page}</Container>
				</div>
			// </div>
		);
	}
}

export default Productdetails;



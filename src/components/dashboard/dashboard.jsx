
import React, { Component } from "react";
import Plan from "../plan/plan";
import { Container, Row, Col } from "reactstrap";
import ReactWOW from "react-wow";
import Creacteaccount from './createaccount'

class Dashboard extends Component {
	render() {
		let page = (
			<div style={{ paddingTop: "10vh",
					 paddingBottom: "20vh"
			               }}>
				
					<div style={{
						paddingTop: "10vh",
						paddingBottom: "20vh",
						display:"flex",
					  	flexWrap:"wrap",
						justifyContent:"space-between"
					      }}>
						<h2 className="f-50 fw-400">Your Products</h2>
						
						<Creacteaccount />
					</div>
					
				
					
			</div>
		);
		
		return (
			<div id="about" className="wd_scroll_wrap wd_scroll">
				<div className="about-area pd-t100 pd-b100">
					<Container>{page}</Container>
				</div>
			</div>
		);
	}
}

export default Dashboard;
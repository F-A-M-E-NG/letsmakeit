
import React, { Component } from "react";
import Dropdownbtn from "../../dropdownbutton/button";
import { Container, Row, Col } from "reactstrap";
import ReactWOW from "react-wow";
import aboutimg from "../../assets/images/about/1.png";

class Dashboard extends Component {
	render() {
		let page = (
			<div style={{ paddingTop: "10vh",
			              display:"inline-flex",
					  flexWrap:"wrap",
					  justifyContent:"space-between" }}>
				
					<div className="about-content">
						<h2 className="f-40 fw-400">Your Products</h2>
						
					</div>
					
				
					<div className="about-content">
						<Dropdownbtn />
                                    
					</div>
					
			</div>
		);
		
		return (
			<div id="about" className="wd_scroll_wrap wd_scroll">
				<div className="about-area pd-t70 pd-b100">
					<Container>{page}</Container>
				</div>
			</div>
		);
	}
}

export default Dashboard;
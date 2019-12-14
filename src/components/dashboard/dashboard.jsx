
import React, { Component } from "react";
import {Redirect } from 'react-router-dom';
import auth from '../../services/authService';
// import Plan from "../plan/plan";
import { Container } from "reactstrap";
// import ReactWOW from "react-wow";
import Creacteaccount from './createaccount'

class Dashboard extends Component {
	render() {
		 if (!auth.getCurrentUser()) return <Redirect to="/login"/>;
		let page = (
			<div style={{ paddingTop: "10vh",
					 paddingBottom: "20vh"
			               }}>
					<hr/>
				 
					<div style={{
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
			
				<div className="about-area pd-t100 pd-b100">
					<Container>{page}</Container>
				</div>
		);
	}
}

export default Dashboard;
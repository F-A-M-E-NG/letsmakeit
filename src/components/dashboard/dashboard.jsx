
import React, { Component } from "react";
import  {Row, Col } from 'reactstrap'
import {Redirect, Link } from 'react-router-dom';
import { getAllAccountByActiveUser } from '../../services/accountService'
import auth from '../../services/authService';
// import Plan from "../plan/plan";
import { Container } from "reactstrap";
// import ReactWOW from "react-wow";
import Creacteaccount from './createaccount'

class Dashboard extends Component {
	state={
	userProducts:{}
	}
	getUserAccounts = async () => {
		const user = auth.getCurrentUser()
		try{
		const {data} = await getAllAccountByActiveUser(user._id)
			console.log(data)
			this.setState({userProducts:data})
		}
		catch(ex){
			if(ex.response && ex.response.data){
				console.log(ex.response.data)	
			}else{
				console.log("Something Failed")
			}
		}
	}

	componentDidMount() {
		this.getUserAccounts()
	}
	render() {
		const { userProducts } = this.state
		console.log(userProducts)
		console.log(this.state.userProducts)
		 if (!auth.getCurrentUser()) return <Redirect to="/login"/>;
		let page = (
			<div style={{ paddingTop: "10vh",
					 paddingBottom: "20vh"
			               }}>
					<hr/>
				 
					<div style={{
						display:"flex",
					  	// flexWrap:"wrap",
						justifyContent:"space-between"
					      }}>
					<h2 className="f-22 fw-400">Your Products</h2>
						
					<Creacteaccount />
					</div>
					

	<Row>
        <br></br>
        <br></br>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "center"
        }}>
          {userProducts.data ? userProducts.data.map( account => 
            <Col lg={3} md={3} sm={3}>
              <div className="tokens">
                
                  
			<h4>{account.accountType}</h4>
			<h5>{account.accountNumber}</h5>
			<Link to={`/user/plan/${account.accountNumber}`} className="btn1" >View more</Link>
                
              </div>

            </Col>
          ):null}
        </div>
      </Row>
				
					
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
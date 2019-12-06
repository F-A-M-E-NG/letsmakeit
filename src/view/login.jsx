import React from 'react';
import axios from 'axios'
import Joi from 'joi-browser'
import DynamicForm from '../common/form'
import {Link} from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';


class Tokens extends DynamicForm {

  state={
    data:{email:"", password:""},
    errors:{},
    isLoading:false
  }
  schema = {
    email: Joi.string()
      .required()
      .email()
      .label("Email"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password")
  };

  doSubmit = async () => {
   this.setState({isLoading:true})
   axios.post("https://bbmpcs.herokuapp.com/api/auth/login", this.state.data)
        .then(success => {
          this.setState({msg:success.data.message, error:null, isLoading:false})
          window.location("/")
        })
        .catch(err => {
        if (err.response && err.response.status === 400 && err.response.data.status === 0){

        this.setState({error:err.response.data.data[0].msg, msg:null, isLoading:false})
        }else {
        this.setState({error:"Something went wrong,please try again later...", isLoading:false })
        }
        })
  };

  render() {
    const {isLoading} = this.state
    let contents = (
      <Row>
            <br></br>
            <br></br>
            <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Col>
          <Col lg={12} md={12} sm={12}>
            <div className="tokens">
              <div className="token-body">
                 {this.state.error && 
                <div className="alert alert-danger">
                  {this.state.error}
                </div>}
                 {this.state.msg && 
                <div className="alert alert-success">
                  {this.state.msg}
                </div>}
              <div className="token-name">Login</div>
                  <form onSubmit={this.handleSubmit}>
                    {this.renderInput("email", "Email", "email")}
                    {this.renderInput("password", "Password", "password")} 
                        
                         <Button disabled={isLoading} type="submit" className="btn1 mt-3" variant="dark">
                      {isLoading &&<i className="fa fa-refresh fa-spin mr-l0"></i>}
                      {!isLoading && "Login"}
                      {isLoading && "Logging in..."}
                    </Button>
                  </form>
                  <p className="text-center"><Link  style={{color:"blue"}} to="/password-reset" className="para">Forgot password?</Link></p>
                  <p className="text-center">Don't Have an account? <Link  style={{color:"blue"}} to="/register" className="para">Register</Link></p>
           
            </div>
            </div>
          
            </Col>
        </Col>
         </div>
      </Row>
    )
    
    return (
      <div id="tokens" className="wd_scroll">
        <section className="tokens-area section">
          <Container>
            {contents}
          </Container>
        </section>
      </div>
    );
  }
}

export default Tokens;
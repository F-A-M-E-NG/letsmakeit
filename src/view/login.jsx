import React from 'react';
import axios from 'axios'
import Joi from 'joi-browser'
import DynamicForm from '../common/form'
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';


class Login extends DynamicForm {

  state = {
    data: { email: "", password: "" },
    errors: {},
     otpData:{email:"", otp:""},
     optnumber:"",
    isLoading: false,
    loginSuccess: false
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
populateUsermail =()=>{
  const {otpData} = {...this.state}
  otpData.otp = this.state.optnumber ? this.state.optnumber= this.state.optnumber:""
  this.setState({otpData})
}
handleotpChange = (event) => {
const {otpData} = {...this.state}
  otpData.otp = this.state.optnumber ? otpData.otp = this.state.optnumber:""
 this.setState({optnumber: event.target.value, otpData});
  
}
  doSubmit = async () => {
    this.setState({ isLoading: true })
    axios.post("https://bbmpcs.herokuapp.com/api/auth/login", this.state.data)
      .then(success => {
        // console.log(success) 
          this.setState({ msg: success.data.message, error: null, isLoading: false })
          window.location = "/user/dashboard"
        
      })
      .catch(err => {
        // console.log(err.response.data)
          if (err.response.data.message === "Account is not confirmed. Please confirm your account.") {
              console.log("true for what we are doing")
            this.setState({ msg: err.response.data.message, error: null, loginSuccess: true, isLoading: false })
          }
          console.log(err.response.data.message)
        this.setState({ error: err.response.data.message, msg: null, isLoading: false })
      })
  };
  confirmOTP = () => {
    // axios.post("https://bbmpcs.herokuapp.com/api/auth/verify-otp", )
    console.log("confirm otp clicked")

  }

  componentDidMount() {
    this.populateUsermail()
    // console.log(this.state.data)
  }
  render() {
    const { isLoading, data, loginSuccess, otpData } = this.state;
    let otp = (
      <Row>
        <br />
        <br />
        <br />
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Col>
            <Col lg={12} md={12} sm={12} >
              <div className="tokens">
                <div className="token-body">
                {this.state.error &&
                    <div className="alert alert-danger">
                      {this.state.error}
                    </div>}
                  {this.state.msg &&
                    <div className="alert alert-success">
                      {`${this.state.msg} please verify your email by entering the OTP sent`}
                    </div>}
                  <div className="token-name">Confirm OTP</div>
                  <form onSubmit={this.confirmOtp} id="register-form" className="form-box form-ajax">
                    <div className="form-group" hidden>
                      <label for="otp-code">Email</label>
                      <input type="email" name="email" id="email" className="form-control form-value" value={data.email} disabled required />
                    </div>
                    <div className="form-group">
                      <label for="otp-code">Otp</label>
                      <input type="number" name="otp-code" id="otp-code" class="form-control form-value"
                        placeholder="OTP" onChange={this.handleotpChange} />
                    </div>

                    <Button disabled={isLoading} type="submit" className="btn1 mt-3" variant="dark">
                      {isLoading && <i className="fa fa-refresh fa-spin mr-l0"></i>}
                      {!isLoading && "Confirm"}
                      {isLoading && "Confirming otp..."}
                    </Button>
                  </form>
                </div>
              </div>

            </Col>
          </Col>

        </div>

      </Row>
    )
    let contents = (
      <Row>
        <br></br>
        <br></br>
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center"
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
                      {isLoading && <i className="fa fa-refresh fa-spin mr-l0"></i>}
                      {!isLoading && "Login"}
                      {isLoading && "Logging in..."}
                    </Button>
                  </form>
                  <p className="text-center mr-t15"><Link style={{ color: "blue" }} to="/password-reset">Forgot password?</Link></p>
                  <p className="text-center">Don't Have an account? <Link style={{ color: "blue" }} to="/register" className="para">Register</Link></p>

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
            {!loginSuccess && contents}
            {loginSuccess && otp}
          </Container>
        </section>
      </div>
    );
  }
}

export default Login;
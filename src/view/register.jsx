import React from "react";
import axios from "axios";
import { RotateSpinner } from "react-spinners-kit";
import { Redirect } from "react-router-dom";
import auth from "../services/authService";
import Joi from "joi-browser";
import { Link } from "react-router-dom";
import DynamicForm from "../common/form";
import { Container, Row, Col, Button } from "reactstrap";

class Tokens extends DynamicForm {
  state = {
    data: {
      firstName: "",
      lastName: "",
      othername: "fuompcs",
      email: "",
      password: "",
    },
    otpData: { email: "", otp: "" },
    errors: {},
    isLoading: false,
    success: false,
    toLogin: false,
  };

  schema = {
    firstName: Joi.string().required().label("Firstname"),
    lastName: Joi.string().required().label("Lastname"),
    othername: Joi.string().required().label("othername"),
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(5).label("Password"),
  };

  handleotpChange = (event) => {
    const { otpData } = { ...this.state };
    otpData.otp = event.target.value;
    otpData.email = this.state.data.email;
    this.setState({ otpData });
  };
  doSubmit = async () => {
    this.setState({ isLoading: true });
    axios
      .post("http://localhost:3000/api/auth/register", this.state.data)
      .then((success) => {
        this.setState({
          msg: success.data.message,
          error: null,
          isLoading: false,
          success: true,
        });
      })
      .catch((err) => {
        if (
          err.response &&
          err.response.status === 400 &&
          err.response.data.status === 0
        ) {
          this.setState({
            error: err.response.data.data[0].msg,
            msg: null,
            isLoading: false,
          });
        } else {
          this.setState({
            error: "Something went wrong,please try again later...",
            isLoading: false,
            msg: null,
          });
        }
      });
  };
  confirmOTP = () => {
    this.setState({ isLoading: true });
    axios
      .post("http://localhost:3000/api/auth/verify-otp", this.state.otpData)
      .then((success) =>
        this.setState({
          msg: success.data.message,
          error: null,
          isLoading: false,
          success: false,
          toLogin: true,
        })
      )
      .catch((err) => {
        this.setState({
          error: err.response.data.message,
          msg: null,
          success: true,
          isLoading: false,
        });
      });
  };
  render() {
    if (this.state.toLogin) return <Redirect to="/login" />;
    if (auth.getCurrentUser()) return <Redirect to="/user/dashboard" />;
    const { isLoading, success, data } = this.state;

    let otp = (
      <Row>
        <br />
        <br />
        <br />
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col>
            <Col lg={12} md={12} sm={12}>
              <div className="tokens">
                <div className="token-body">
                  {this.state.error && (
                    <div className="alert alert-danger">
                      {`${this.state.error}`}
                    </div>
                  )}
                  {this.state.msg && (
                    <div className="alert alert-success">
                      {`${this.state.msg} please verify your email by entering the OTP sent`}
                    </div>
                  )}
                  <div className="token-name">Confirm OTP</div>
                  <form
                    onSubmit={this.confirmOtp}
                    id="register-form"
                    className="form-box form-ajax"
                  >
                    <div className="form-group" hidden>
                      <label for="otp-code">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="form-control form-value"
                        value={data.email}
                        disabled
                        required
                        hidden
                        onChange={this.handleotpChange}
                      />
                    </div>
                    <div className="form-group">
                      <label for="otp-code">Otp</label>
                      <input
                        type="number"
                        name="otp-code"
                        id="otp-code"
                        class="form-control form-value"
                        placeholder="OTP"
                        onChange={this.handleotpChange}
                      />
                    </div>

                    <Button
                      disabled={isLoading}
                      type="submit"
                      className="btn1 mt-3"
                      variant="dark"
                    >
                      {isLoading && (
                        <i className="fa fa-refresh fa-spin mr-l0"></i>
                      )}
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
    );
    let contents = (
      <Row>
        <br></br>
        <br></br>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col>
            <Col lg={12} md={12} sm={12}>
              <div className="tokens">
                <div className="token-body">
                  {this.state.error && (
                    <div className="alert alert-danger">{this.state.error}</div>
                  )}
                  {this.state.msg && (
                    <div className="alert alert-success">{this.state.msg}</div>
                  )}

                  <div className="token-name">REGISTER</div>
                  <form
                    onSubmit={this.handleSubmit}
                    id="register-form"
                    className="form-box form-ajax"
                  >
                    {this.renderInput("firstName", "First Name")}
                    {this.renderInput("lastName", "Last Name")}
                    {this.renderInput("email", "Email", "email")}
                    {this.renderInput("password", "Password", "password")}
                    <Button
                      disabled={isLoading}
                      type="submit"
                      className="btn1 mt-3"
                      variant="dark"
                    >
                      {isLoading && (
                        <div style={{ marginLeft: "10px" }}>
                          <RotateSpinner
                            size={20}
                            color="#ffffff"
                            loading={isLoading}
                          />
                        </div>
                      )}
                      {!isLoading && "Register"}
                    </Button>
                  </form>
                  <p className="text-center">
                    Already have an account?{" "}
                    <Link
                      style={{ color: "blue" }}
                      to="/login"
                      className="para"
                    >
                      Login
                    </Link>
                  </p>
                  <p className="text-center">
                    By registering, you agree to our{" "}
                    <a
                      style={{ color: "blue" }}
                      href="https://google.com"
                      className="para"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Terms and Conditions
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Col>
        </div>
      </Row>
    );

    return (
      <div id="tokens" className="wd_scroll">
        <section className="tokens-area section">
          <Container>
            {!success && contents}
            {success && otp}
          </Container>
        </section>
      </div>
    );
  }
}

export default Tokens;

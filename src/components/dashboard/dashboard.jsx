import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { RotateSpinner } from "react-spinners-kit";
import { Redirect, Link } from "react-router-dom";
import { getAllAccountByActiveUser } from "../../services/accountService";
import auth from "../../services/authService";
// import Plan from "../plan/plan";
import { Container } from "reactstrap";
// import ReactWOW from "react-wow";
import Creacteaccount from "./createaccount";
import AcountData from "./accountData";

class Dashboard extends Component {
  state = {
    userProducts: {},
  };
  getUserAccounts = async () => {
    const user = auth.getCurrentUser();
    try {
      const { data } = await getAllAccountByActiveUser(user._id);

      this.setState({ userProducts: data });
    } catch (ex) {
      if (ex.response && ex.response.data) {
      } else {
      }
    }
  };

  componentDidMount() {
    this.getUserAccounts();
  }
  render() {
    const { userProducts } = this.state;
    auth.expiredLogout();
    if (!auth.getCurrentUser()) return <Redirect to="/login" />;
    let page = (
      <div style={{ paddingTop: "10vh", paddingBottom: "20vh" }}>
        <hr />

        <div
          style={{
            display: "flex",
            // flexWrap:"wrap",
            justifyContent: "space-between",
          }}
        >
          <h2 className="f-22 fw-400">Your Products</h2>

          <Creacteaccount />
        </div>

        <Row>
          <br></br>
          <br></br>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            {AcountData ? (
              AcountData.map((account) => (
                <Col lg={3} md={3} sm={3}>
                  <div className="tokens">
                    <h4>{account.aType}</h4>
                    <h5>{account.aNum}</h5>
                    <Link to={`/user/plan/${account.aNum}`} className="btn1">
                      View more
                    </Link>
                  </div>
                </Col>
              ))
            ) : (
              <div style={{ marginLeft: "150px" }}>
                <RotateSpinner size={50} color="blue" loading={true} />
              </div>
            )}
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

import React, { Component, Fragment } from "react";
import Login from "./login";
import Subscribe from "../components/sub/subscribe";


class LoginPage extends Component {
	render() {
		return (
			<Fragment>
				<Login />

				<Subscribe />
			</Fragment>
		);
	}
}

export default LoginPage;

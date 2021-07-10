import React, { Component, Fragment } from "react";
import Register from './register'

class RegisterPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Fragment>
				<Register />
			</Fragment>
		);
	}
}

export default RegisterPage;

import React, { Component, Fragment } from "react";

import Profile from "../components/profile/profile";





class ProfilePage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Fragment>
				<Profile />
			</Fragment>
		);
	}
}

export default ProfilePage;
import React, { Component, Fragment } from "react";
import About from "../components/about/about";


class AboutPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Fragment>
				<About />
			</Fragment>
		);
	}
}

export default AboutPage;

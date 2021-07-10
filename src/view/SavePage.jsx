import React, { Component, Fragment } from "react";

import Savings from "../components/features/save";
import Subscribe from "../components/sub/subscribe";


class SavePage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Fragment>
				<Savings />
				<Subscribe />
			</Fragment>
		);
	}
}

export default SavePage;

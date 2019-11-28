import React, { Component, Fragment } from "react";
import Roadmap from "../components/roadMap/roadmap";

import Subscribe from "../components/sub/subscribe";


class SavePage extends Component {
	render() {
		return (
			<Fragment>
				<Roadmap />
				<Subscribe />
			</Fragment>
		);
	}
}

export default SavePage;

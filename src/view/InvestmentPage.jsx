import React, { Component, Fragment } from "react";
import Features from "../components/features/features";
import Subscribe from "../components/sub/subscribe";


class InvestmentPage extends Component {
	render() {
		return (
			<Fragment>
				<Features />
				<Subscribe />
			</Fragment>
		);
	}
}

export default InvestmentPage;

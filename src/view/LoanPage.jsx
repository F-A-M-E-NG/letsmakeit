import React, { Component, Fragment } from "react";

import Loans from "../components/features/loan";


import Subscribe from "../components/sub/subscribe";


class LoanPage extends Component {
	componentDidMount() {
		window.scrollTo(0, 0);
	}
	render() {
		return (
			<Fragment>
				<Loans />
				<Subscribe />
			</Fragment>
		);
	}
}

export default LoanPage;

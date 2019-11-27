import React, { Component, Fragment } from "react";
import About from "../components/about/about";
import Features from "../components/features/features";
import Projects from "../components/projects/projects";
import Steps from "../components/steps/steps";
import Roadmap from "../components/roadMap/roadmap";
import Tokens from "../components/token/tokens";
import PressMedia from "../components/pressmedia/pressmedia";
import Subscribe from "../components/sub/subscribe";
import MainSlider from "../components/mainSlider/mainSlider";
import Currency from "../components/currency/currency";
import Teams from "../components/team/team";
import Blogs from "../components/blog/blog";

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

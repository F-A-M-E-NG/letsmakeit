import React, { Component, Fragment } from "react";
import About from "../components/about/about";
import Features from "../components/features/features";
import Projects from "../components/projects/projects";
import Steps from "../components/steps/steps";
import Roadmap from "../components/roadMap/roadmap";
import Tokens from "../components/token/tokens";
import PressMedia from "../components/pressmedia/pressmedia";
import Subscribe from "../components/subscribe/subscribe";
import MainSlider from "../components/mainSlider/mainSlider";
import Currency from "../components/currency/currency";
import Teams from "../components/team/team";
import Blogs from "../components/blog/blog";

class HomePage extends Component {
	render() {
		return (
			<Fragment>
				<MainSlider />
				<Currency />

				<Projects />
				<Roadmap fill="#f6f6ff" />
				<Tokens />
				<Teams fill="#f6f6ff" />
				<Blogs />
				<PressMedia />
				<Subscribe />
			</Fragment>
		);
	}
}

export default HomePage;

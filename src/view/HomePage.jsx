import React, { Component, Fragment } from "react";
import About from "../components/about/about";
import Steps from "../components/products_links/productlink";
import Subscribe from "../components/subscribe/subscribe";
import MainSlider from "../components/mainSlider/mainSlider";
import Currency from "../components/currency/currency";
import Contact from "../view/contact";



class HomePage extends Component {
	render() {
		return (
			<Fragment>
			<div className="wd_scroll_wrap">
			<MainSlider />
			<Currency />
			</div>
			<About fill="#f6f6ff" />
			<Steps fill="#f6f6ff"/>
			<div className="wd_scroll_wrap">
			<Subscribe fill="#f6f6ff" />
			</div>
			<div className="wd_scroll_wrap">
			<Contact />
			</div>
			
			</Fragment>
		);
	}
}

export default HomePage;

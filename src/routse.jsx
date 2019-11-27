import { lazy } from "react";
import About from "./components/about/about";
import Features from "./components/features/features";
import Projects from "./components/projects/projects";
import Steps from "./components/steps/steps";
import Roadmap from "./components/roadMap/roadmap";
import Tokens from "./components/token/tokens";
import PressMedia from "./components/pressmedia/pressmedia";
import Subscribe from "./components/subscribe/subscribe";
import MainSlider from "./components/mainSlider/mainSlider";
import Currency from "./components/currency/currency";
import Teams from "./components/team/team";
import Blogs from "./components/blog/blog";
import Homepage from "./view/HomePage";
import HomePage from "./view/HomePage";
// import "./layout/footer/footer.css";

// const HomePage = lazy(() => import('./view/HomePage'))
// const About = lazy(() => import('./components/about/about'))
// const Products = lazy(() => import('./components/roadMap/roadmap'))
// const ProductDetails = lazy(() => import('./components/projects/projects'))
// const Team = lazy(() => import('./components/currency/currency'))
// const Save = lazy(() => import('./view/Save/Save'))

const RouteList = [
	{ exact: true, path: "/", component: HomePage },
	{ exact: true, path: "/invest", component: Features },
	{ exact: true, path: "/save", component: Projects },
	{ exact: true, path: "/loan", component: Steps },
	{ exact: true, path: "/about", component: Teams },
	{ exact: true, path: "/register", component: Blogs }
];

export default RouteList;

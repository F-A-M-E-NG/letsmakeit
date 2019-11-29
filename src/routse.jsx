import React, { lazy } from "react";
import HomePage from "./view/HomePage";
import SavePage from "./view/SavePage";
import LoanPage from "./view/LoanPage";
import LoginPage from "./view/LoginPage";
import RegisterPage from "./view/RegisterPage";
import InvestmentPage from "./view/InvestmentPage";
import AboutPage from "./view/AboutPage";
// import "./layout/footer/footer.css";

// const HomePage = lazy(() => import('./view/HomePage'))
// const About = lazy(() => import('./components/about/about'))
// const Products = lazy(() => import('./components/roadMap/roadmap'))
// const ProductDetails = lazy(() => import('./components/projects/projects'))
// const Team = lazy(() => import('./components/currency/currency'))
// const Save = lazy(() => import('./view/Save/Save'))

const RouteList = [
	{ exact: true, path: "/", component: HomePage },
	{ exact: true, path: "/invest", component: InvestmentPage },
	{ exact: true, path: "/save", component: SavePage },
	{ exact: true, path: "/loan", component: LoanPage },
	{ exact: true, path: "/loan/dmi", component: AboutPage },
	{ exact: true, path: "/register", component: RegisterPage },
	{ exact: true, path: "/login", component: LoginPage }
];

export default RouteList;

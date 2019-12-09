import { lazy } from "react";
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
const Dashboard = lazy(() => import('./components/dashboard/dashboard'))
const ProfilePage= lazy(() => import('./view/profile'))
const Createplan= lazy(() => import('./components/createplan/createplan'))
const Plan= lazy(() => import('./components/plan/plan'))


const RouteList = [
	{ exact: true, path: "/", component: HomePage },
	{ exact: true, path: "/invest", component: InvestmentPage },
	{ exact: true, path: "/save", component: SavePage },
	{ exact: true, path: "/loan", component: LoanPage },
	{ exact: true, path: "/loan/dmi", component: AboutPage },
	{ exact: true, path: "/register", component: RegisterPage },
	{ exact: true, path: "/login", component: LoginPage },
	{ exact: true, path: "/user/dashboard", component: Dashboard },
	{ exact: true, path: "/user/profile", component: ProfilePage },
	{ exact: true, path: "/createplan", component: Createplan },
	{ exact: true, path: "/plan", component: Plan },
	
];

export default RouteList;

import { lazy } from 'react'

const HomePage = lazy(() => import('./view/HomePage'))
const About = lazy(() => import('./components/about/about'))
const Products = lazy(() => import('./components/roadMap/roadmap'))
const ProductDetails = lazy(() => import('./components/projects/projects'))
const Team = lazy(() => import('./components/currency/currency'))
const Save = lazy(() => import('./view/Save/Save'))

const RouteList = [
  { exact: true, path: "/",    component: HomePage },
  { exact: true, path: "/about", component: About },
  { exact: true, path: "/products", component: Products },
  { exact: true, path: "/products/details", component: ProductDetails },
  { exact: true, path: "/team", component: Team },
  { exact: true, path: "/save", component: Save },
]


export default RouteList
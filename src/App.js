import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import "./css/styles.css";
import logo from "./images/circle-icon.png";


const Home = lazy(() => import('./Home-page'));
const About = lazy(() => import('./About-page'));
const Team = lazy(() => import('./Team-page'));
const Book = lazy(() => import('./Book-page'));
const BookComplete = lazy(() => import('./BookComplete-page'));
const Launch = lazy(() => import('./Launch-page'));
const Product = lazy(() => import('./Product-page'));
const Career = lazy(() => import('./Career-page'));
const News = lazy(() => import("./News-page"));
const Tech = lazy(() => import("./Tech-page"));
const SorTeD = lazy(() => import("./SorTeD"));


function load() {
  return  (<div className="loader d-flex justify-content-center align-items-center">
  <div className="spinner-grow" role="status">
    <span className="sr-only">Loading...</span>
  </div>
  <img src={logo} className="loader-img"></img>
</div>);
}

const App = () => (
  <Router>
    <Suspense fallback={load()}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/load" component={load} />
        <Route path="/about" component={About} />
        <Route path="/team" component={Team} />
        <Route path="/book" component={Book} />
        <Route path="/book-complete" component={BookComplete} />
        <Route path="/launch-sites" component={Launch} />
        <Route path="/agnibaan" component={Product} />
        <Route path="/career" component={Career} />
        <Route path="/news" component={News} />
        <Route path="/tech" component={Tech} />
        <Route path="/SorTeD" component={SorTeD} />
      </Switch>
    </Suspense>
  </Router>
);

export default App;
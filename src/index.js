import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import "./index.scss";

import Home from "./home";
import Works from "./works";
import Commission from "./commission";
import Comic from "./comic";
import About from "./about";

function toggleMenu() {
  $("#nav-icon-main").toggleClass("Open");
}

const routes = (
  <Router>
    <Route exact path="/" component={Home} />
    <Route path="/works" component={Works} />
    <Route path="/commission" component={Commission} />
    <Route path="/comic" component={Comic} />
    <Route path="/about" component={About} />
    <div id="menu-holder" className="hamburger" onClick={toggleMenu}>
      <menu className="page-mainmenu" id="pagemenu">
        <div id="nav-icon-main">
          <span />
          <span />
          <span />
          <ul className="pageItems" id="pageItemsAll">
            <Link to="/">
              <li className="mainlink">HOME</li>
            </Link>
            <Link to="/works">
              <li className="mainlink">WORKS</li>
            </Link>
            <Link to="/commission">
              <li className="mainlink">COMMISSIONS</li>
            </Link>
            <Link to="/comic">
              <li className="mainlink">COMIC</li>
            </Link>
            <Link to="/about">
              <li className="mainlink">ABOUT</li>
            </Link>
          </ul>
        </div>
      </menu>
    </div>
  </Router>
);

ReactDOM.render(routes, document.getElementById("app-root"));

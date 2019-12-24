import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import $ from "jquery";

import "./index.scss";
import "react-image-lightbox/style.css";

import Home from "./home";
import Works from "./works";
import Commission from "./commission";
import About from "./about";

function toggleMenu() {
  $("#nav-icon-main").toggleClass("open");
}

const routes = (
  <Router>
    <Route exact path="/jiggy2204" component={Home} />
    <Route path="/works" component={Works} />
    <Route path="/commission" component={Commission} />
    <Route path="/about" component={About} />
    <div id="menu-holder" className="hamburger" onClick={toggleMenu}>
      <menu className="page-mainmenu" id="pagemenu">
        <div id="nav-icon-main">
          <span />
          <span />
          <span />
          <ul className="pageItems" id="pageItemsAll">
            <Link to="/jiggy2204" activeClassName="jiggypage">
              <li className="mainlink">HOME</li>
            </Link>
            <Link to="/works" activeClassName="jiggypage">
              <li className="mainlink">WORKS</li>
            </Link>
            <Link to="/commission" activeClassName="jiggypage">
              <li className="mainlink">COMMISSIONS</li>
            </Link>
            <Link to="/about" activeClassName="jiggypage">
              <li className="mainlink">ABOUT</li>
            </Link>
          </ul>
        </div>
      </menu>
    </div>
  </Router>
);

ReactDOM.render(routes, document.getElementById("app-root"));

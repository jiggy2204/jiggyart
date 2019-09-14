import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import "./index.scss";

import Home from "./home";
import Works from "./works";
import Commission from "./commission";
import Comic from "./comic";
import About from "./about";

const routes = (
    <Router>
      <div id="menu-holder" className="hamburger">
        <menu className="page-mainmenu" id="pagemenu">
          <div id="nav-icon-main">
            <span />
            <span />
            <span />
            <ul className="pageItems" id="pageItemsAll">
              <li className="mainlink">
                <Link to="/">HOME</Link>
              </li>
              <li className="mainlink">WORKS</li>
              <li className="mainlink">COMMISSIONS</li>
              <li className="mainlink">COMIC</li>
              <li className="mainlink">ABOUT</li>
            </ul>
          </div>
          <Route exact path="/" component={Home} />
          <Route path="/works" component={Works} />
          <Route path="/commission" component={Commission} />
          <Route path="/comic" component={Comic} />
          <Route path="/about" component={About} />
        </menu>
      </div>
    </Router>
)


ReactDOM.render(routes, document.getElementById("app-root"));

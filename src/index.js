import React, { Component } from "react";
import ReactDOM from "react-dom";

import Home from "./home";
import Works from "./works";
import Commission from "./commission";
import Comic from "./comic";
import About from "./about";

import "./index.scss";

class App extends Component {
  constructor() {
    super();
    this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
    $("#nav-icon-main").toggleClass("open");
  }

  render() {
    return (
      <div>
        <div id="menu-holder" className="hamburger">
          <menu className="page-mainmenu" id="pagemenu">
            <div id="nav-icon-main" onClick={this.openMenu}>
              <span />
              <span />
              <span />
              <ul className="pageItems" id="pageItemsAll">
                <li className="mainlink">HOME</li>
                <li className="mainlink">WORKS</li>
                <li className="mainlink">COMMISSIONS</li>
                <li className="mainlink">COMIC</li>
                <li className="mainlink">ABOUT</li>
              </ul>
            </div>
          </menu>
        </div>
        <Home />
        <Works />
        <Commission />
        <Comic />
        <About />
        <div id="social-area" className="social-menu">
          <img
            className="social-tab social-bg"
            src="./images/menuSocialMain_bottom.png"
          />
          <img
            className="social-tab social-front"
            src="./images/menuSocialMain_top.png"
          />
          <section id="inner-social" className="inner-social-menu">
            <a href="#" className="social-dot-holder">
              <div
                className="social-link social-twitter twitter"
                id="twitter-dot"
              />
              <p className="social-title">TWITTER</p>
            </a>
            <a href="#" className="social-dot-holder">
              <div
                className="social-link social-instagram instagram"
                id="instagram-dot"
              />
              <p className="social-title">INSTAGRAM</p>
            </a>
            <a href="#" className="social-dot-holder">
              <div
                className="social-link social-twitch twitch"
                id="twitch-dot"
              />
              <p className="social-title">TWITCH</p>
            </a>
            <a href="#" className="social-dot-holder">
              <div
                className="social-link social-patreon patreon"
                id="patreon-dot"
              />
              <p className="social-title">PATREON</p>
            </a>
            <a href="#" className="social-dot-holder">
              <div
                className="social-link social-facebook facebook"
                id="facebook-dot"
              />
              <p className="social-title">FACEBOOK</p>
            </a>
          </section>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-root"));

import React, { Component } from "react";
import { Link } from "react-router-dom";

import $ from "jquery";

class Home extends Component {
  render() {
    $("#menu-holder").hide();

    return (
      <div id="mainpage" className="main-page jiggypage">
        <div className="title-banner" id="jiggybanner">
          <div className="bannerBG" id="banner-bg" />
          <img
            src="./images/jiggyart_title.png"
            className="title"
            id="bannerTitle"
          />
        </div>
        <div className="intro" id="intro-container">
          <div className="intro-header">WELCOME</div>
          <div className="intro-text">
            Hey Jiggypops! Thanks so much for stopping by! Take a look around
            the site using the icons and drop a line!
          </div>
        </div>
        <div className="main-menu">
          <div className="menu-item works">
            <Link to="/works">
              <img
                className="menu-pic menu-pic-bottom works-pic"
                src="./images/menuWorks_bottom.png"
              />
              <img
                className="menu-pic menu-pic-top works-pic"
                src="./images/menuWorks_top.png"
              />
            </Link>
          </div>
          <div className="menu-item commissions">
            <Link to="/commission">
              <img
                className="menu-pic menu-pic-bottom comm-pic"
                src="./images/menuCommissions_bottom.png"
              />
              <img
                className="menu-pic menu-pic-top comm-pic"
                src="./images/menuCommissions_top.png"
              />
            </Link>
          </div>
          <div className="menu-item about">
            <Link to="/about">
              <img
                className="menu-pic menu-pic-bottom about-pic"
                src="./images/menuAbout_bottom.png"
              />
              <img
                className="menu-pic menu-pic-top about-pic"
                src="./images/menuAbout_top.png"
              />
            </Link>
          </div>
        </div>
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
            <a target="_blank"
              href="https://twitter.com/jiggyart2204"
              className="social-dot-holder"
            >
              <div
                className="social-link social-twitter twitter"
                id="twitter-dot"
              />
              <p className="social-title">TWITTER</p>
            </a>
            <a target="_blank" 
              href="https://www.instagram.com/jiggyart2204/"
              className="social-dot-holder"
            >
              <div
                className="social-link social-instagram instagram"
                id="instagram-dot"
              />
              <p className="social-title">INSTAGRAM</p>
            </a>
            <a target="_blank" 
              href="https://www.twitch.tv/jiggyart"
              className="social-dot-holder"
            >
              <div
                className="social-link social-twitch twitch"
                id="twitch-dot"
              />
              <p className="social-title">TWITCH</p>
            </a>
            <a target="_blank" 
              href="https://www.facebook.com/jiggyart/"
              className="social-dot-holder"
            >
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

export default Home;

import React, { Component } from "react";

class Home extends Component {
  constructor() {
    super();
    this.getPage = this.getPage.bind(this);
  }

  getPage() {}

  render() {
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
            the site and drop a line!
          </div>
        </div>
        <div className="main-menu">
          <div className="menu-item works">
            <img
              className="menu-pic menu-pic-bottom works-pic"
              src="./images/menuWorks_bottom.png"
            />
            <img
              className="menu-pic menu-pic-top works-pic"
              src="./images/menuWorks_top.png"
            />
          </div>
          <div className="menu-item commissions">
            <img
              className="menu-pic menu-pic-bottom comm-pic"
              src="./images/menuCommissions_bottom.png"
            />
            <img
              className="menu-pic menu-pic-top comm-pic"
              src="./images/menuCommissions_top.png"
            />
          </div>
          <div href="" className="menu-item comic">
            <img
              className="menu-pic menu-pic-bottom comic-pic"
              src="./images/menuComic_bottom.png"
            />
            <img
              className="menu-pic menu-pic-top comic-pic"
              src="./images/menuComic_top.png"
            />
          </div>
          <div className="menu-item about">
            <img
              className="menu-pic menu-pic-bottom about-pic"
              src="./images/menuAbout_bottom.png"
            />
            <img
              className="menu-pic menu-pic-top about-pic"
              src="./images/menuAbout_top.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

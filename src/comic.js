import React, { Component } from "react";
import $ from 'jquery';

class Comic extends Component {
  render() {
    $("#menu-holder").show();
    return (
      <div id="comicpage" className="comic-page jiggypage">
        <header className="pageHeader">
          <img
            className="comicHeader pageHeaderImg"
            src="./images/menuComic.png"
          ></img>
          <p className="header-text">
            My first work with my husband! He and I co-wrote it, and I
            illustrated it! Coming soon!
          </p>
        </header>
      </div>
    );
  }
}

export default Comic;

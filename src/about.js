import React, { Component } from "react";
import $ from 'jquery';

class About extends Component {
  render() {
    $("#menu-holder").show();
    return (
      <div id="aboutpage" className="about-page jiggypage">
        <header className="pageHeader">
          <img
            className="aboutHeader pageHeaderImg"
            src="./images/menuAbout.png"
          ></img>
          <p className="header-text">Just a little bit about little 'ole me!</p>
        </header>
        <main className="content-section">
          <div className="me-section">
            <img className="myPic" id="selfiePic"></img>
            <h2 className="myPic-title">Jen "Jiggy" Ignacio</h2>
            <h4 className="myPic-subtitle">Artist/Freelancer</h4>
          </div>
          <div className="me-text">
            <p className="me-indepth">
              Born and raised on Long Island, I moved further south to spread my
              wings (and my funds). After many failed attempts (read = me having
              anxiety), I took the plunge and started going public with my art.
              The overwhelming positive response and feedback then gave me the
              courage to go back to school for computer science, which
              culminated in me getting a career in Web Development and Design. I
              now use my two loves to create characters, worlds, and websites
              both personally and professionally. While currently I am using my
              tech job to fund my art passion, I hope one day to become as big
              as some Patreons and fund my artwork on its own merit.
            </p>
          </div>
          <div className="about-footer" id="aboutFooter">
            <h3 className="aboutFooterTitle">EDUCATION</h3>
            <ul className="aboutList">
              <li className="aboutListItem">
                B.A. Communications - Adelphi University
              </li>
              <li className="aboutListItem">
                A.A. Fine Arts - Essex Communty College
              </li>
              <li className="aboutListItem">
                Worked toward B.A. Computer Science - University of Maryland
                University College
              </li>
            </ul>
          </div>
        </main>
      </div>
    );
  }
}

export default About;

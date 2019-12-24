import React, { Component } from "react";
import $ from "jquery";

class Commission extends Component {
  render() {
    $("#menu-holder").show();
    return (
      <div id="commissionpage" className="commission-page jiggypage">
        <header className="pageHeader">
          <img
            className="commissionHeader pageHeaderImg"
            src="./images/menuCommissions.png"
          ></img>
          <p className="header-text">
            Want something original? Or maybe you want a different take on your
            favorite character? Take a look at the info and feel free to contact
            me if you have any questions!
          </p>
        </header>
        <main className="content-section">
          <section className="commissionInfo-holder" id="commissionInfo">
            <div className="sketch-info comInfoMain">
              <img
                src="./images/cP_Sketch.jpg"
                className="sketchex comPic"
              ></img>
              <h3 className="comtitle">SKETCH</h3>
              <p className="comsize">9 x 12 - $20</p>
              <p className="comsize">11 x 17 - $30</p>
            </div>
            <div className="lineart-info comInfoMain">
              <img
                src="./images/cP_Lineart.jpg"
                className="lineex comPic"
              ></img>
              <h3 className="comtitle">LINEART</h3>
              <p className="comsize">9 x 12 - $30</p>
              <p className="comsize">11 x 17 - $60</p>
            </div>
            <div className="baseColor-info comInfoMain">
              <img
                src="./images/cP_ColorFlats.jpg"
                className="colorex comPic"
              ></img>
              <h3 className="comtitle">COLOR</h3>
              <p className="comsize">9 x 12 - $60</p>
              <p className="comsize">11 x 17 - $120</p>
            </div>
            <div className="colorBG-info comInfoMain">
              <img
                src="./images/carniverousPlant_lowRes.jpg"
                className="bgex comPic"
              ></img>
              <h3 className="comtitle">WITH SHADING/BACKGROUND</h3>
              <p className="comsize">9 x 12 - $80</p>
              <p className="comsize">11 x 17 - $160</p>
            </div>
          </section>
          <section className="commNotification" id="commNotes">
            <div className="customNotice">
              <p className="customText">
                Please use the form for ordering. You will have the option to
                choose a custom size there.
                <br /> If you have any questions, please contact me.
              </p>
            </div>
            <div className="commForm">
              <a
                href="https://forms.gle/p25vaPjrKoN6ific7"
                target="_blank"
                className="commButton"
              >
                FILL OUT THE FORM
              </a>
              <a href="mailto:jiggyart2204@gmail.com" className="commButton">
                EMAIL
              </a>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Commission;

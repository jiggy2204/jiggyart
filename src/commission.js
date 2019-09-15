import React, { Component } from "react";

class Commission extends Component {
  render() {
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
                src="./images/cP_Sketch.JPG"
                className="sketchex comPic"
              ></img>
              <h3 className="comtitle">SKETCH</h3>
              <p className="comsize">9 x 12 - $10</p>
              <p className="comsize">11 x 17 - $20</p>
            </div>
            <div className="lineart-info comInfoMain">
              <img
                src="./images/cP_Lineart.JPG"
                className="lineex comPic"
              ></img>
              <h3 className="comtitle">LINEART</h3>
              <p className="comsize">9 x 12 - $15</p>
              <p className="comsize">11 x 17 - $25</p>
            </div>
            <div className="baseColor-info comInfoMain">
              <img
                src="./images/cP_ColorFlats.JPG"
                className="colorex comPic"
              ></img>
              <h3 className="comtitle">COLOR</h3>
              <p className="comsize">9 x 12 - $60</p>
              <p className="comsize">11 x 17 - $80</p>
            </div>
            <div className="colorBG-info comInfoMain">
              <img
                src="./images/carniverousPlant_lowRes.jpg"
                className="bgex comPic"
              ></img>
              <h3 className="comtitle">WITH BACKGROUND</h3>
              <p className="comsize">9 x 12 - $70</p>
              <p className="comsize">11 x 17 - $90</p>
            </div>
          </section>
          <section className="commNotification" id="commNotes">
            <div className="customNotice">
              <p className="customText">
                If you want a commission in another size other than listed,
                please contact me about pricing
              </p>
            </div>
            <div className="commForm">
              <div className="commButton">FILL OUT THE FORM</div>
              <div className="commButton">EMAIL FOR CUSTOM ORDER</div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default Commission;

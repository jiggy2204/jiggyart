import React, { Component } from "react";
import WorkImages from "./workList.json";
import Lightbox from "react-image-lightbox";

class Works extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: WorkImages,
      photoIndex: 0,
      isOpen: false
    };
  }

  render() {
    const { images, photoIndex, isOpen } = this.state;
    return (
      <div id="workspage" className="works-page jiggypage">
        <header className="pageHeader">
          <img
            className="worksHeader pageHeaderImg"
            src="./images/menuWorks.png"
          ></img>
          <p className="header-text">
            Commissions, fanart, and originals that I've done. Some of these are
            a labor of love, but I definitely find doing work for other people
            more fulfilling and fun!
          </p>
        </header>
        <main className="content-section">
          {images.map((pic, idx) => {
            return (
              <div key={idx} id={pic.index} className="shadowDiv">
                <div className="imageThumb">
                  <img
                    className="imageMain"
                    src={pic.thumb}
                    onClick={() =>
                      this.setState({ photoIndex: idx, isOpen: true })
                    }
                  />
                </div>
              </div>
            );
          })}
        </main>
        {isOpen && (
          <Lightbox
            mainSrc={images[photoIndex].fullsize}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length
              })
            }
          />
        )}
      </div>
    );
  }
}

export default Works;

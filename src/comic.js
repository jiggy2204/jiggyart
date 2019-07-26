import React, { Component } from 'react';

class Comic extends Component {

    render(){
        return(
            <div id="comicpage" className="comic-page jiggypage">
                <header className="pageHeader">
                    <img className="comicHeader pageHeaderImg" src='./images/menuComic.png'></img>
                    <p className="header-text">
                        My first work with my husband! He and I co-wrote it, and I illustrated it! Take a peek!
                    </p>
                </header>
            </div>
        )
    }
}

export default Comic;
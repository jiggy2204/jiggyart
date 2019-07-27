import React, { Component } from 'react';

class Works extends Component {

    render(){
        return(
            <div id="workspage" className="works-page jiggypage active">
                <header className="pageHeader">
                    <img className="worksHeader pageHeaderImg" src='./images/menuWorks.png'></img>
                    <p className="header-text">
                        Commissions, fanart, and originals that I've done. Some of these are a labor of love, but I definitely find doing work for other people more fulfilling and fun!
                    </p>
                </header>
            </div>
        )
    }
}

export default Works;
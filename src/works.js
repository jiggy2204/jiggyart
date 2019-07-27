import React, { Component } from 'react';
import WorkImages from './worksList.json';

class Works extends Component {
    constructor(props){
        super(props)
            this.state ={
                images: WorkImages,
        }
    }

    render(){
        const {images} = this.state;

        return(
            <div id="workspage" className="works-page jiggypage active">
                <header className="pageHeader">
                    <img className="worksHeader pageHeaderImg" src='./images/menuWorks.png'></img>
                    <p className="header-text">
                        Commissions, fanart, and originals that I've done. Some of these are a labor of love, but I definitely find doing work for other people more fulfilling and fun!
                    </p>
                </header>
                <main className="content-section">
                    {images !== null ? 
                    images.map((pic, index) => {
                        return <div key={index} className="shadowDiv">
                                    <a href={pic.fullsize} className="imageThumb">
                                        <img className="imageMain" src={pic.thumb} />
                                    </a>
                                </div>
                    }) : ''}
                </main>
                <div className="workSideFiller"></div>
            </div>
        )
    }
}

export default Works;
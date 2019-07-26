import React, { Component } from 'react';

class About extends Component {

    render(){
        return(
            <div id="aboutpage" className="about-page jiggypage">
                <header className="pageHeader">
                    <img className="aboutHeader pageHeaderImg" src='./images/menuAbout.png'></img>
                    <p className="header-text">
                        Just a littl bit about little 'ole me!
                    </p>
                </header>
            </div>
        )
    }
}

export default About;
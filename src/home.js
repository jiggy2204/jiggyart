import React, { Component } from 'react';

class Home extends Component {
    render(){
        return(
             <div id="mainpage" class="main-page jiggypage active">
                 <div class="title-banner" id="jiggybanner">
                    <div class="bannerBG" id="banner-bg"></div>
                        <img src="./images/jiggyart_title.png" class="title" id="bannerTitle" />
                    </div>
                    <div class="intro" id="intro-container">
                    <div class="intro-header">WELCOME</div>
                    <div class="intro-text">Hey Jiggypops! Thanks so much for stopping by! Take a look around the site and drop a line!</div>
                    </div>
                    <div class="main-menu">
                    <a class="menu-item works" data-target="workspage">
                        <img class="menu-pic menu-pic-bottom works-pic" src="./images/menuWorks_bottom.png" />
                        <img class="menu-pic menu-pic-top works-pic" src="./images/menuWorks_top.png" />
                    </a>
                    <div class="menu-item commissions">
                        <img class="menu-pic menu-pic-bottom comm-pic" src="./images/menuCommissions_bottom.png" />
                        <img class="menu-pic menu-pic-top comm-pic" src="./images/menuCommissions_top.png" />
                    </div>
                    <div href=""class="menu-item comic">
                        <img class="menu-pic menu-pic-bottom comic-pic" src="./images/menuComic_bottom.png" />
                        <img class="menu-pic menu-pic-top comic-pic" src="./images/menuComic_top.png" />
                    </div>
                    <div class="menu-item about">
                        <img class="menu-pic menu-pic-bottom about-pic" src="./images/menuAbout_bottom.png" />
                        <img class="menu-pic menu-pic-top about-pic" src="./images/menuAbout_top.png" />
                    </div> 
                    </div>
                    <div id="social-area" class="social-menu">
                        <img class="social-tab social-bg" src="./images/menuSocialMain_bottom.png" />
                        <img class="social-tab social-front" src="./images/menuSocialMain_top.png" />
                        <section id="inner-social" class="inner-social-menu">
                        <a href="#" class="social-dot-holder">
                            <div class="social-link social-twitter twitter" id="twitter-dot"></div>
                            <p class="social-title">TWITTER</p>
                        </a>
                        <a href="#" class="social-dot-holder">
                            <div class="social-link social-instagram instagram" id="instagram-dot"></div>
                            <p class="social-title">INSTAGRAM</p>    
                        </a>
                        <a href="#" class="social-dot-holder">
                            <div class="social-link social-twitch twitch" id="twitch-dot"></div>
                            <p class="social-title">TWITCH</p>
                        </a>
                        <a href="#" class="social-dot-holder">
                            <div class="social-link social-patreon patreon" id="patreon-dot"></div>
                            <p class="social-title">PATREON</p> 
                        </a>
                        <a href="#" class="social-dot-holder">
                            <div class="social-link social-facebook facebook" id="facebook-dot"></div>
                            <p class="social-title">FACEBOOK</p>               
                        </a>
                        </section>
                    </div>
               </div>  
        )
    }
}

export default Home;
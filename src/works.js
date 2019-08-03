import React, { Component } from 'react';
import WorkImages from './worksList.json';

var slideIndex = 1;

class Works extends Component {
    constructor(props){
        super(props)
            this.state ={
                images: WorkImages
        }
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.currentSlide = this.currentSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        this.showSlides = this.showSlides.bind(this);
    }

    closeModal(){
        $(".modal").removeClass("active");
        $(".mySlides").removeClass("active");
    }

    openModal(e){
        var n = e.currentTarget.id;

        $(".modal").addClass("active");
        var sl = $("#" + n +".mySlides").addClass("active");

   
        this.currentSlide(sl);

        console.log(e.currentTarget.id);
    }

    nextSlide(n){
        this.showSlides(slideIndex += n);
    }

    
    currentSlide(n){
        this.showSlides(slideIndex = n);
        console.log(n);
    }

    showSlides(n){
        var i;
        var slides = document.querySelectorAll(".mySlides");

        if(n > slides.length) {
            slideIndex = 1;
        }

        if(n < 1) {
            slideIndex = slides.length;
        }
        
        console.log(slides)
    }

    render(){
        const {images} = this.state;
        return(
            <div id="workspage" className="works-page jiggypage">
                <div id="myModal" className="modal">
                    <span className="close cursor" onClick={this.closeModal}>X</span>
                    <div className="modalContent">
                        {images.map((img, ix) => {
                            return (
                                <div className="mySlides" id={img.index} key={ix}>
                                    <img src={img.fullsize} className="fullImage"></img>
                                    <div className="caption-container">
                                        <p id="picCaption">{img.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                        <a className="prevArrow" onClick={this.nextSlide(-1)}>&#10094;</a>
                        <a className="nextArrow" onClick={this.nextSlide(1)}>&#10095;</a>
                    </div>
                </div>
                <header className="pageHeader">
                    <img className="worksHeader pageHeaderImg" src='./images/menuWorks.png'></img>
                    <p className="header-text">
                        Commissions, fanart, and originals that I've done. Some of these are a labor of love, but I definitely find doing work for other people more fulfilling and fun!
                    </p>
                </header>
                <main className="content-section">
                    {images !== null ? 
                    images.map((pic, idx) => {
                        return <div key={idx} id={pic.index} className="shadowDiv" onClick={this.openModal}>
                                    <div className="imageThumb">
                                        <img className="imageMain" src={pic.thumb} />
                                    </div>
                                </div>
                    }) : ''}
                </main>
                <div className="workSideFiller"></div>
            </div>
        )
    }
}

export default Works;
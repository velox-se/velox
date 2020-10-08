import React, { Component } from 'react';
import './style/Carousel.css'
import Slide from './Slide'

class Carousel extends Component {
    constructor() {
        super();
        this.state = {}
    }

    listSlides() {
        const images = {"Product - bottle": "bottle.jpg", "Product - set": "set.jpg" , "Product - cure": "cure.jpg"};
        const keys = Object.keys(images)
        return keys.map((key, index) => {
            return (
                <Slide key = {index} alt = {key} img = {images[key]} />
            )
        })
    }


    render() {
        return ( 
            <div className="carousel-wrapper">
                <section className="carousel">
                    <nav />
                    <div className="slide-container">{this.listSlides()}</div>
                </section>
            </div>
        )
    }
}

export default Carousel
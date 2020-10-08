import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Slide from './Slide'
import './style/Carousel.css'
 
class DemoCarousel extends Component {
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
            <Carousel showThumbs={false} infiniteLoop={true}>
                {this.listSlides()}
            </Carousel>
        );
    }
};

export default DemoCarousel
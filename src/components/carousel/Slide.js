import React, { Component } from 'react';
import "./style/Slide.css"

class Slide extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="slide">
                <img className="image" src={`${process.env.PUBLIC_URL}/assets/` + this.props.img} alt={this.props.alt} />
            </div>
        )
    }
}

export default Slide
import React, { Component } from "react";
import './style/DesktopNavbar.css'

class DesktopNavbar extends Component {
  constructor() {
      super();
      this.state = {};
  }

  render() {
      return (
        <div className="top-menu desktop" id="top-menu-desktop">
            <div></div>
            <div className="logo">velox</div>
            <div className="info">
                <h4 className="about-header">About us</h4>
                <h4 className="contact-header">Contact</h4>
            </div>
        </div>
      )
  }
}

export default DesktopNavbar
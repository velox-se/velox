import React, { Component } from "react";
import './style/MobileNavbar.css'
import Overlay from './Overlay'

class MobileNavbar extends Component {
  constructor() {
      super();
      this.state = {
        active: false
      }
  }

  toggleOverlay() {
    if (this.state.active) {
      this.setState({ active: false })
      document.body.style.overflow = "";
    } else {
      this.setState({ active: true })
      document.body.style.overflow = "hidden";
    }
  }
  
  render() {
      return (
        <div>
          <div className="top-menu mobile" id="top-menu-mobile">
              <div></div>
              <div className="logo">velox</div>
              <div className={this.state.active ? "icon active" : "icon"} onClick={this.toggleOverlay.bind(this)}>
                  <div className="hamburger"></div>
              </div>
          </div>
          <Overlay active = {this.state.active} />
        </div>
      )
  }
}

export default MobileNavbar
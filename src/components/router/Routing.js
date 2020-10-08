import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import '../navbar/style/DesktopNavbar.css';
import '../navbar/style/Header.css';
import '../navbar/style/MobileNavbar.css';
import '../navbar/style/Overlay.css';
import About from '../container/About';
import Contact from '../container/Contact';
import Home from '../container/Home';
import Footer from '../footer/Footer';
import connect from 'react-redux';
import { fetchPosts } from '../../actions/postActions'

class Routing extends Component {
    constructor() {
        super();
        this.state = {
            mobile: this.isMobile(),
            active: false
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.active !== this.props.active) {
          this.setState({ active: this.props.active })
        }
    }

    isMobile() {
        return window.screen.width < 600 ? true : false;
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
        const mql = window.matchMedia('(max-width: 700px)');
            mql.addEventListener('change', (e) => {
            const mobileView = e.matches;
            if (mobileView) {
                this.setState({mobile: true});
            } else {
                this.setState({mobile: false});
            }
        });

        return (
            <Router>
                <div>
                    <div className="navbar">
                        {this.state.mobile ? (
                            <div>
                                <div className="top-menu mobile" id="top-menu-mobile">
                                    <div></div>
                                    <div className="logo">velox</div>
                                    <div className={this.state.active ? "icon active" : "icon"} onClick={this.toggleOverlay.bind(this)}>
                                        <div className="hamburger"></div>
                                    </div>
                                </div>
                                <div className={this.state.active ? "overlay active" : "overlay"} >
                                    <div className="overlay-content">
                                    <Link to="/" onClick={this.toggleOverlay.bind(this)}><h4 className="about-header">Home</h4></Link>
                                    <Link to="/about" onClick={this.toggleOverlay.bind(this)}><h4 className="about-header">About us</h4></Link>
                                    <Link to="/contact" onClick={this.toggleOverlay.bind(this)}><h4 className="contact-header">Contact</h4></Link>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="top-menu desktop" id="top-menu-desktop">
                                <div></div>
                                <div className="logo">velox</div>
                                <div className="info">
                                    <Link to="/" className="about-header"><h4>Home</h4></Link>
                                    <Link to="/about" className="about-header"><h4>About us</h4></Link>
                                    <Link to="/contact" className="contact-header"><h4>Contact</h4></Link>
                                </div>
                            </div>
                            )}
                    </div>
                    
                    <Switch>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
      
                    <Footer />

                </div>
            </Router>
        )
    }
}

export default Routing
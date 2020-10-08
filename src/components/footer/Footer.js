import React, { Component } from 'react';
import './style/Footer.css'

class Footer extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="Footer">
                <div className="container">
                    <div className="box box-1">
                        <h3>
                            HELP
                        </h3>
                        <ul>
                            help@velox.se
                        </ul>
                        <ul>
                            Call us
                        </ul>
                        <ul>
                            FAQ/Contact US
                        </ul>
                    </div>
                    <div className="box box-2">
                        <h3>
                            SHOP
                        </h3>
                        <ul>
                            Our products
                        </ul>
                    </div>
                    <div className="box box-3">
                        <h3>
                            COMPANY
                        </h3>
                        <ul>
                            Our Story
                        </ul>
                        <ul>
                            Our Suppliers
                        </ul>
                    </div>
                    <div className="box box-4">
                        <h3>
                            FOLLOW US ON SOCIAL MEDIA!
                        </h3>
                        <span>
                            Keep yourself updated by following our feed!
                        </span>
                        <ul>

                        </ul>
                        <ul>
                            <img data-src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-GB/images/7ALf4NFNH4VStmrXU0qSKK/1" alt="Social Icon - Instagram" src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-GB/images/7ALf4NFNH4VStmrXU0qSKK/1" />
                            <img data-src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-GB/images/55ZLXdMQu728huA78Qlfkb/1" alt="Social Icon - Facebook" src="https://cdn.allbirds.com/image/upload/q_auto/v1/production/anchorLink/en-GB/images/55ZLXdMQu728huA78Qlfkb/1" />
                        </ul>
                    </div>
                    <div className="box box-5">
                        <h3>
                            APPROVED BY KEMI.SE
                        </h3>
                        <ul>
                            Box1
                        </ul>
                    </div>
                    <div className="box box-6">
                        <h3>
                            SELECT LANGUAGE:
                        </h3>
                        <ul>
                            Box1
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
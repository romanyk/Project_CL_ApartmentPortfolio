import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom';
import './footer.css';

export default class Footer extends Component {

    render() {
        return (

            <footer className="page-footer font-small cyan darken-3">
                {/*
                <Container className="footer">
                    <Row >

                        <Col sm={3} className="footer_icons">

                            <a href="https://www.airbnb.ru/users/show/22282395">
                                <img
                                    src={require("../image/airbnb.png")}
                                    alt="Airbnb"
                                    className="contact_details_airbnb" /></a>

                            <a className="fb-ic" href="https://www.facebook.com/andrii.osipov">
                                <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>
                            <a className="li-ic" href="https://www.linkedin.com/in/andrii-osipov/">
                                <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x"></i>
                            </a>

                        </Col>

                        <Col sm={3}>
                            <h5 className="heading-style-5">Phone:</h5>
                            <div className="contact_details">
                                <i className="icons-marker fa fa-phone" href="tel: +48 783 358 551"></i>
                                <a href="tel: +48 783 358 551">
                                    +48 783 358 551</a>
                            </div>
                        </Col>
                        <Col sm={3}>
                            <h5 className="heading-style-5">E-mail:</h5>
                            <div className="contact_details">
                                <i className="fa fa-envelope" href="mailto:welcomehome@gmail.com"></i>
                                <a href="mailto:welcomehome@gmail.com">welcomehome@gmail.com</a>
                            </div>

                        </Col>

                    </Row>

                </Container> */}

                <div className="text-center py-3">
                    © 2019 All rights are reserved. <Link to="/rodo"> Privacy Policy </Link>

                </div>

            </footer>
        )
    }
}
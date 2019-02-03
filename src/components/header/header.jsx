import React, { Component, Fragment } from 'react';
import MainCarousel from '../main-carousel';
import CardView from '../card-view';
import './header.css'

export default class Header extends Component {

    render() {
        return (

            <Fragment>
                <nav id="navbar-example2" className="navbar navbar-light fixed-top" style={{backgroundColor: "rgb(0,0,0,0.7)" }} >
                    <a className="navbar-brand" style={{color: "#fff"}} href="#">Welcome Home</a>
                    <ul className="nav nav-pills">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Apartments</a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#krk">Krakow</a>
                                <div role="separator" className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#wro">Wroclaw</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#reviews">Guest Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#partners">Our Partners</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div data-spy="scroll" data-target="#navbar-example2" data-offset="0">
                    <MainCarousel />
                    <CardView id="apartments" />

                    <h4 id="reviews">Guest Reviews</h4>
                    {this.props.pastReviews}
                    <h4 id="partners">Our Partners</h4>
                    <p>...</p>
                    <h4 id="contact">Contact</h4>
                    <p>...</p>
                </div>
            </Fragment>
        )
    }
}







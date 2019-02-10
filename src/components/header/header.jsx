import React, { Component } from 'react';
import './header.css';

export default class Header extends Component {

    render() {
        return (
            <header >
                <nav id="navbar-example2" className="navbar navbar-light fixed-top">
                    <a href="#" className="logo">
                        <img src={require('../image/Logo.png')} alt="" width="50" height="50" />
                    </a>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#krk">Krakow</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#wro">Wroclaw</a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link" href="#review">Guest Reviews</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>

                    </ul>
                </nav>
            </header>
        )
    }
}
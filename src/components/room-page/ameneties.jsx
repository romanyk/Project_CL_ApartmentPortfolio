import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import "./ameneties.css"

export default class Ameneties extends Component {
    
    state = {
        krk: {
            title: "Loft Style apartment next to Quattro",
            people:4,
            size:46},
        wro: {
            title:"Beautiful Studio Apartment",
            people:3,
            size:34}
    }



    render() {

        const city = (this.props.city === "wro") ? this.state.wro : this.state.krk

        return (
            
            <Container className="ameneties">
                <Row>
                    <Col>
                        <h1>{city.title}</h1>
                    </Col>

                </Row>
                <Row className="div">

                    <Col xs={2.3} sm={2} >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            style={{
                                width: 20,
                                height: 14,
                                viewBox: "0 0 20 14"
                            }}>
                            <path
                                fillOpacity=".8"
                                fillRule="evenodd"
                                d="M14.5 7C16 7 17 6 17 4.5S16 2 14.5 2a2.5 2.5 0 0 0 0 5zM7 6c1.7 0 3-1.3 3-3S8.7 0 7 0 4 1.3 4 3s1.3 3 3 3zm7.5 3C12.7 9 9 10 9 11.8V14h11v-2.3C20 10 16.3 9 14.5 9zM7 8c-2.3 0-7 1.2-7 3.5V14h7v-2.3c0-.8.3-2.3 2.4-3.4L7 8z"></path>
                        </svg>
                        <div className="title">
                            {city.people} people
                        </div>

                    </Col>
                    <Col xs={3} sm={2}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="20"
                            viewBox="0 0 18 20"
                            style={{
                                width: 18,
                                height: 20,
                                viewBox: "0 0 18 20"
                            }}>
                            <path
                                fillOpacity=".8"
                                d="M8 0v2c-2.5.5-4.6 2.5-5 5h12c-.4-2.5-2.5-4.5-5-5V0H8zM2 8v2h14V8H2zm3 4c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zM3 15c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zM1 18c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1zm4 0c-.6 0-1 .5-1 1s.5 1 1 1 1-.5 1-1-.5-1-1-1z"></path>
                        </svg>

                        <div className="title">
                            1 Bathroom
                        </div>
                    </Col>
                    <Col xs={3} sm={2}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="16"
                            viewBox="0 0 20 16"
                            style={{
                                width: 20,
                                height: 16
                            }}>
                            <path
                                fillOpacity=".8"
                                d="M2 0C1 0 0 1 0 2v11h20V2c0-1-1-2-2-2H2zm2 2h3c1 0 2 1 2 2v2H2V4c0-1 1-2 2-2zm9 0h3c1 0 2 1 2 2v2h-7V4c0-1 1-2 2-2zM0 14v2h3v-2H0zm17 0v2h3v-2h-3z"></path>
                        </svg>

                        <div className="title">
                            2 Beds
                        </div>
                    </Col>

                    <Col xs={3} sm={2}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20">
                            <path
                                fillOpacity=".8"
                                d="M4 0L0 3l4 3V4h6v2l4-3-4-3v2H4V0zm13 6l-3 4h2v6h-2l3 4 3-4h-2v-6h2l-3-4zM0 7v13h13V7H0zm2 2h9v9H2V9z"></path>
                        </svg>

                        <div className="title">
                            {city.size}m<sup>2</sup>
                        </div>

                    </Col>
                    <Col xs={3} sm={2}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="15"
                            viewBox="0 0 20 15">
                            <path
                                fillOpacity=".8"
                                d="M10 0C6.2 0 2.7 1.5 0 3.8l1.3 1.5C3.7 3.3 6.7 2 10 2c3.3 0 6.3 1.3 8.6 3.3L20 3.8C17.3 1.5 13.8 0 10 0zm0 4C7.2 4 4.6 5 2.7 6.8L4 8.3C5.6 7 7.7 6 10 6s4.4 1 6 2.3l1.3-1.5C15.3 5 12.8 4 10 4zm0 4c-1.8 0-3.4.7-4.7 1.8l1.3 1.5c1-.8 2-1.3 3.3-1.3 1.2 0 2.3.5 3.2 1.3l1.3-1.5c-1-1-2.7-1.8-4.5-1.8zm0 4c-.8 0-1.5.3-2 .8l2 2.2 2-2.2a2.8 2.8 0 0 0-2-.8z"></path>
                        </svg>

                        <div className="title">
                            Wi-Fi
                        </div>
                    </Col>

                    <Col xs={3} sm={2}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="20"
                            viewBox="0 0 18 20">
                            <path
                                fillOpacity=".8"
                                d="M2 0C1 0 0 1 0 2v15c0 1 1 2 2 2v1h2v-1h10v1h2v-1c1 0 2-1 2-2V2c0-1-1-2-2-2H2zm0 2h6v15H2V2zm8 0h6v15h-6V2zM5 8v4h2V8H5zm6 0v4h2V8h-2z"></path>
                        </svg>

                        <div className="title">
                            Furnished
                        </div>

                    </Col>

                </Row>

            </Container >
        )
    }
}

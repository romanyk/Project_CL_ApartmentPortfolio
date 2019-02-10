import React, { Component } from 'react';
import './why.css';

import { Container, Row, Col } from 'react-grid-system';

export default class Why extends Component {
    render() {
        return (
            <Container className="why">

                <Row>
                    <Col>
                        <h2>Perfect apartments for those who are on business trips</h2>
                        <p>Our apartxments are a much better option than a traditional hotel. In general, apartments for rent become more and more popular among business travellers. Save money for accommodation travelling to Krakow or Wroclaw! We really know business travellers have their own needs which are “a must” in business trip. Travel trip must be cost efficient - one night for three employees at our Studio is only a cost of 100 PLN per night.
<br />
                            <br />
                            Moreover, our apartments for business travellers offer a very fast and unlimited Internet, comfortable beds and armchairs and a place for work. What to expect more?</p>
                    </Col>

                </Row>
                <Row>
                    <Col md={12}>
                        <h5 className="why"> Our apartments are fully equipped</h5>
                    </Col>

                </Row>

                <Row >

                    <Col sm={5} lg={5} offset={{ sm: 2 }}>
                        <i className="fas fa-wifi"></i>
                        <p> Fast Wi-Fi up to 300 mB/s</p>


                        <p>  <img src={require("../image/iron.svg")} alt="iron" /> Iron + ironing board/s</p>
                        <p> <img src={require("../image/shampoo.svg")} alt="shampoo" /> Soap, shampoo, hair dryer</p>
                        <p> <img src={require("../image/towels.svg")} alt="towels" /> Soap, shampoo, hair dryer</p>
                        <i className="fas fa-mug-hot"></i>
                        <p> Coffee, tea, 3 kinds of sufgar</p>

                    </Col>
                    <Col sm={5} lg={5}>
                        <i className="fas fa-utensils"></i>
                        <p> kettle, toaster, cutlery, </p>

                        <p> <img src={require("../image/microwave.svg")} alt="microwave" />  Oven or microwave </p>
                        <i className="fas fa-shopping-basket"></i>
                        <p> Groceries - on request</p>
                        <i className="fab fa-accessible-icon"></i>
                        <p> All apartments are wheelchar accessible</p>
                        <i className="fas fa-paw"></i>
                        <p> Animals friendly</p>

                    </Col>

                </Row>

            </Container>
        )
    }
}


import React, { Component } from 'react';
import { Container, Row, Col } from 'react-grid-system';

export default class Description extends Component {

    state = {
        krk: "15 min from the City Centre by bus and 5 min to Quattro Business Park by walk. K" +
            "ing size bed with fresh linen and huge wardrobe. Free towels and toiletries. 300" +
            " mb unlimited internet. In this area, we have few parks, Airport museum, Aqua Pa" +
            "rk, gym, cinema, Business Centres and shopping malls.",
        wro: "Apartment is located in quiet and sleeping area of Wroclaw. In 10 min walking di" +
            "stance you'll find main Train and Bus stations, AquaPark, Shopping Mall and even" +
            "t centre Browar Mieszczański."

    }

    render() {

        const { city } = this.props;

        const desription = (city === "wro") ? this.state.wro : this.state.krk


        return (
            <Container >
                <Row>
                    <Col className="description">
                        {desription}
                    </Col>

                </Row>

            </Container>
        )
    }
}


import React, { Component } from 'react';


import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { DayPickerSingleDateController } from 'react-dates';
import { Container, Row, Col } from 'react-grid-system';

export default class Calendar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: null,
            endDate: null,
            focusedInput: null,
            isDayBlocked: "2019-02-09"

        };
    }

    // Airbnb calendar fetch. Not working due to Cors issue
    // componentDidMount() {

    //     let headers = new Headers();

    //     headers.append('Content-Type', 'application/json');
    //     headers.append('Accept', 'application/json');
    //     headers.append('Origin', 'http://localhost:3000');

    //     fetch("airbnb.com/calendar/ical/14016936.ics?s=5094c7f9e24fc0031497df21162ba024", {
    //         method: "GET",
    //         mode: 'cors',
    //         headers: "Access-Control-Allow-Origin"
    //     })
    //         .then(res => {
    //             // console.log(res)
    //             return res.json()
    //         })
    //         .then(data => console.log(data)
    //         )
    // }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12} offset={{ md: 10 }}>

                        <DayPickerSingleDateController
                            startDateId="startDate"
                            endDateId="endDate"
                            startDate={this.state.startDate}
                            endDate={this.state.endDate}
                            onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate }) }}
                            focusedInput={this.state.focusedInput}
                            onFocusChange={(focusedInput) => { this.setState({ focusedInput }) }}


                        />


                    </Col>
                </Row>
            </Container>
        );
    }
}

import React, { Component, Fragment } from 'react';
import './room-page.css';
import Galery from './galery';
import Ameneties from './ameneties';
import Description from './description';
// import Calendar from './calendar';
import GoogleApiWrapper from '../map/map';


export default class RoomPage extends Component {


    render() {

        const city = this.props.match.path.split("/")[1];
        // console.log(city);


        return (
            <Fragment >
                <div id={city}>
                    <Ameneties city={city} />
                    <Description city={city} />
                    {/* <Calendar /> */}
                    <Galery city={city} />
                    <GoogleApiWrapper city={city} />
                </div>

            </Fragment>




        )
    }
}

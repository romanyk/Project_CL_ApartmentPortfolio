import React, { Component } from 'react';
import Header from '../header';
import MainCarousel from '../main-carousel';
import ImageAvatars from '../reviews';
import Reviews from '../reviews/testimony';
import CardView from '../card-view';
import AirbnbAPI from '../../service/airbnb';

export default class App extends Component {


    state = { AirbnbAPI }


    language = navigator.language;



    render() {

        return (
            <div>

                <Header pastReviews={<Reviews reviewData={this.state} />} />






            </div>
        )
    }
}


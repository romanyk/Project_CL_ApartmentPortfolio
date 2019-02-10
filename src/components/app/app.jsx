import React, { Component, Fragment } from 'react';
import Header from '../header';
import MainCarousel from '../main-carousel';
import Reviews from '../reviews/review';
import CardView from '../card-view';
import AirbnbAPI from '../../service/airbnb';
import RoomPage from '../room-page';
import RODO from '../rodo';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Contact from '../contact';
import Footer from '../footer';
import Why from '../why';



export default class App extends Component {


    state = { AirbnbAPI }


    language = navigator.language;



    render() {

        return (
            <Router>
                <Fragment>
                    <Header />
                    <MainCarousel />
                    <Why />
                    <CardView />
                    <Switch>
                        <Route exact path="/krk" component={RoomPage} />
                        <Route exact path="/wro" component={RoomPage} />
                        <Reviews getReview={this.state.AirbnbAPI} />
                        <Route exact path="/rodo" component={RODO} />
                    </Switch>
                    <Contact />
                    <Footer />
                </Fragment>
            </Router>

        )
    }
}


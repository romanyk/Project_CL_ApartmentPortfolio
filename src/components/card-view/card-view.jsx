import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './card-view.css';
import 'animate.css';

export default class CardView extends Component {

    state = {
        city: [
            "krk", "wro"
        ],
        description: [
            "Loft Style apartment next to Aqua Park and Quattro", "Studio apartment 15 min away from City Centre"
        ],
        imageUrl: [
            "https://a0.muscache.com/im/pictures/99a2e677-92b3-45b0-b435-549b162a3c15.jpg", "https://a0.muscache.com/im/pictures/ca32182d-5bb8-42b5-b5c4-8855a7c78a15.jpg"
        ],
        button: "Check Details",
        animation: [
            "fadeInRight", "fadeInLeft"
        ],
        anotation: [
            "15 min from the City Centre by bus and 5 min to Quattro Business Park by walk. K" +
            "ing size bed with fresh linen and huge wardrobe. Free towels and toiletries. 300" +
            " mb unlimited internet. In this area, we have few parks, Airport museum, Aqua Pa" +
            "rk, gym, cinema, Business Centres and shopping malls.",
            "Apartment is located in quiet and sleeping area of Wroclaw. In 10 min walking di" +
            "stance you'll find main Train and Bus stations, AquaPark, Shopping Mall and even" +
            "t centre Browar Mieszczański. "
        ],
        details: ["Apartament for 4 people", "Apartament for 2 people"]

    }

    render() {

        const {
            city,
            description,
            imageUrl,
            button,
            animation,
            anotation,
            details
        } = this.state;
        const selector = [0, 1];

        return (
            <section className="card-view">
                <div className="container">

                    <div className="col-md-12 fadeInRight animated">

                        <div className="intro">
                            <p className="subs">PREMIUM HOUSING</p>

                            <h2>Check our apartments for rent</h2>
                        </div>
                    </div>
                    <div className="row">{selector.map(value => {

                        return (
                            <div
                                className={"col block" + (1 + parseInt(value)) + " card border-secondary " + animation[value] + " animated "}
                                key={value}>
                                <div className="width: 18rem; ">
                                    <img src={imageUrl[value]} className="card-img-top " alt="..." />
                                    <div className="middle">
                                        <div className="text">{details[value]}</div>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{description[value]}</h5>
                                        <p className="card-text">{anotation[value]}</p>
                                        <Link className="btn btn-primary" to={city[value]}>
                                            {button}</Link>


                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    </div>
                </div >
            </section>
        )
    }
}

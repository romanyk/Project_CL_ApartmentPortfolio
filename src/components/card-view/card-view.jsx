import React, { Component } from 'react';


export default class CardView extends Component {

    state = {
        city: ["Krakow", "Wroclaw"],
        description: ["Loft Style apartment next to Aqua Park and Quattro", "Studio apartment 15 min away from City Centre"],
        imageUrl: ["https://a0.muscache.com/im/pictures/99a2e677-92b3-45b0-b435-549b162a3c15.jpg",
            "https://a0.muscache.com/im/pictures/ca32182d-5bb8-42b5-b5c4-8855a7c78a15.jpg"],
        button: "Check Details"

    }

    render() {

        const { city, description, imageUrl, button } = this.state;
        const selector = [0, 1];

        return (
            <div className="container">
                <div className="row" >{
                    selector.map(value => {
                        return (
                            <div className={"col block" + (1 + parseInt(value)) + " card border-secondary "} style={{ margin: 10, minWidth: 150 }} key={value}>
                                <div className="card" className="width: 18rem;">
                                    <img src={imageUrl[value]} className="card-img-top " style={{ width: "90%", margin: 15 }} alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{city[value]}</h5>
                                        <p className="card-text">{description[value]}</p>
                                        <a href="#" className="btn btn-primary">{button}</a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    )}
                </div>
            </div >
        )
    }
}



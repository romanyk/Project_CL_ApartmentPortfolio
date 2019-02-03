import React, { Component } from 'react';


export default class Reviews extends Component {
    state = {

    }

    render() {

        const { name, icon, url, date, review } = this.props.reviewData.AirbnbAPI;

        const selector = [0, 1, 2, 3];
        const position = [0, 1, 2];
        let counter = -3;
        return (
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" data-interval="10000"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    {selector.map((value, idx) => {
                        const carouselActive = idx === 0 ? "carousel-item active" : "carousel-item"
                        counter = counter + 3;
                        return (
                            <div className={carouselActive + ""} key={idx}>
                                <div className="row">
                                    {position.map(index => {
                                        index = index + counter;
                                        return (

                                            <div className="col-sm-4" >
                                                <div className="card" style={{ backgroundColor: "transparent", borderColor: "transparent" }}>
                                                    <a href={url[index]}>
                                                        <img src={icon[index]} alt={name[index]} className="rounded-circle mx-auto d-block img-fluid img-thumbnail" style={{ maxWidth: 150 }} />
                                                    </a>

                                                    <h4 className="card-title mx-auto d-block">{name[index]}</h4>
                                                    <h6 className="blue-text font-weight-bold mx-auto d-block" style={{ color: "#2196f3" }}>{date[index]}</h6>
                                                    <p>
                                                        <i className="fa fa-quote-left" ></i> {review[index]}</p>

                                                    <div className="mx-auto d-block" style={{ color: "gold" }}>
                                                        <i className="fa fa-star"> </i>
                                                        <i className="fa fa-star"> </i>
                                                        <i className="fa fa-star"> </i>
                                                        <i className="fa fa-star"> </i>
                                                        <i className="fa fa-star"> </i>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })}
                                </div>

                            </div>
                        )


                    })}
                </div>
            </div >
        )

    }
}
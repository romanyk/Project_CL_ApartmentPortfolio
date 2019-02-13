import React, { Component } from 'react';
import "./review.css";

export default class Reviews extends Component {

    render() {
        const { name, icon, url, date, review } = this.props.getReview;


        const selector = [0, 1, 2, 3];
        const position = [0, 1, 2];
        let counter = -3;
        return (
            <section className="container page-top" data-spy="scroll" data-target="#navbar-example2" data-offset="0" >
                <h2 className="review " id="review">Guests testimony</h2>

                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" data-interval="7000"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                    </ol>
                    <div className="carousel-inner">
                        {selector.map((value, idx) => {
                            const carouselActive = idx === 0 ? "carousel-item active" : "carousel-item"
                            counter = counter + 3;
                            return (
                                <div className={carouselActive} key={idx}>
                                    <div className="row">
                                        {position.map(index => {
                                            index = index + counter;
                                            return (
                                                <div className={"col block" + index + 1} key={idx + index}>
                                                    <div className="card border-0">
                                                        <a href={url[index]}>
                                                            <img src={icon[index]} alt={name[index]} className="rounded-circle mx-auto d-block img-fluid img-thumbnail cardview" />
                                                        </a>
                                                        <h4 className="card-title mx-auto d-block">{name[index]}</h4>
                                                        <h6 className="blue-text font-weight-bold mx-auto d-block cardview">{date[index]}</h6>
                                                        <p>
                                                            <i className="fa fa-quote-left" ></i> {review[index]}</p>
                                                        <div className="mx-auto d-block cardview">
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

            </section>
        )

    }
}
import React from "react";
import './main-carousel.css';

const MainCarousel = () => {
    return (
        <div
            id="carouselExampleIndicatorsheader"
            className="carousel slide py-0"
            data-ride="carousel"
            >
            <ol className="carousel-indicators">
                <li
                    data-target="#carouselExampleIndicatorsheader"
                    data-slide-to="0"
                    className="active"></li>
                <li data-target="#carouselExampleIndicatorsheader" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicatorsheader" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner ">
                <div className="carousel-item active ">
                    <img
                        src="https://a0.muscache.com/im/pictures/99a2e677-92b3-45b0-b435-549b162a3c15.jpg"
                        className="d-block vw-100 vh-100 "
                        alt="Modern Bathroom" />
                </div>
                <div className="carousel-item ">
                    <img
                        src="https://a0.muscache.com/im/pictures/9c278093-b47b-4b1c-975b-df05cfb70c60.jpg"
                        className="d-block vw-100 vh-100"
                        alt="Stylish Dining Room" />
                </div>
                <div className="carousel-item">
                    <img
                        src="https://a0.muscache.com/im/pictures/23a937f1-cdf2-4e05-8ac6-6a66135aee82.jpg"
                        className="d-block vw-100 vh-100"
                        alt="Comfortable Bedroom" />
                </div>
            </div>
        </div>
    );
}

export default MainCarousel;

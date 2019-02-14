import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import './galery.css';


export default class Galery extends Component {

    state = {
        isOpen: false,
        photoIndex: 0

    };

    updateState = (e) => {
        this.setState({
            isOpen: true,
            photoIndex: e.target.id
        })

    }

    render() {

        const { city } = this.props;

        const selection = [1, 2, 3, 4, 5, 6, 7, 8]
        const { isOpen, photoIndex } = this.state;

        const images = selection.map((item) => require(`../image/${city}/${item}.jpg`))
        // console.log(images[currentPic]);
        // console.log((images[(currentPic + 1) % images.length]));


        return (

            <div className="container page-top">
                <h1>Galery</h1>
                <div className="row">
                    {
                        images.map((item, index) => {
                            return (
                                <div className="col-lg-3 col-md-4 col-xs-6 thumb "
                                    key={index}>
                                    <img src={images[index]}
                                        id={index}
                                        className="zoom img-fluid animate hover-shadow cursor"
                                        onClick={this.updateState}
                                        alt=""
                                    />
                                </div>
                            )
                        })}

                    {isOpen && (


                        <Lightbox
                            mainSrc={images[photoIndex]}
                            nextSrc={images[(photoIndex + 1) % images.length]}
                            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                            onCloseRequest={() => this.setState({ isOpen: false })}
                            onMovePrevRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + images.length - 1) % images.length,
                                })
                            }
                            onMoveNextRequest={() =>
                                this.setState({
                                    photoIndex: (photoIndex + 1) % images.length,
                                })
                            }
                        />
                    )}
                </div>
            </div>

        )
    }
}
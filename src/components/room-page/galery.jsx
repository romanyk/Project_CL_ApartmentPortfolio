import React, { Component } from 'react';
import './galery.css';


export default class Galery extends Component {

    render() {


        const { city } = this.props;

        const selection = [1, 2, 3, 4, 5, 6, 7, 8]

        

        return (
            <div className="container page-top">
                <h1>Galery</h1>
                <div className="row">
                    {
                        selection.map((item) => {


                            return (
                                <div className="col-lg-6 col-md-4 col-xs-6 thumb " key={item}>
                                    <img src={require(`../image/${city}/${item}.jpg`)} className="zoom img-fluid animate " value={item} alt="" />
                                </div>
                            )
                        })}
                </div>
            </div>
        )
    }
}




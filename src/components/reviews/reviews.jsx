import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const styles = {
    avatar: {
        margin: 10,
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
};

function ImageAvatars(props) {
    const { classNamees } = props;
    return (
        <div id="multi-item-example" className="carousel testimonial-carousel slide carousel-multi-item wow fadeIn" data-ride="carousel" style={{ visibility: "visible", animationName: "fadeIn" }}>


            <div className="controls-top">
                <a className="btn-floating light-blue darken-4 waves-effect waves-light" href="#multi-item-example" data-slide="prev">
                    <i className="fa fa-chevron-left"></i>
                </a>
                <a className="btn-floating light-blue darken-4 waves-effect waves-light" href="#multi-item-example" data-slide="next">
                    <i className="fa fa-chevron-right"></i>
                </a>
            </div>

            <ol className="carousel-indicators">
                <li data-target="#multi-item-example" data-slide-to="0" className="light-blue darken-4 active"></li>
                <li data-target="#multi-item-example" data-slide-to="1" className="light-blue darken-4"></li>
                <li data-target="#multi-item-example" data-slide-to="2" className="light-blue darken-4"></li>
            </ol>

            <div className="carousel-inner" role="listbox">


                <div className="carousel-item active">

                    <div className="col-md-4">

                        <div className="testimonial">

                            <div className="avatar mx-auto">
                                <img src="https://a0.muscache.com/im/pictures/8b82ea50-36a3-4ccd-b0d7-c54187bce820.jpg?aki_policy=profile_medium" alt="example avatar" className="rounded-circle img-fluid" />
                            </div>

                            <h4>Anna Deynah</h4>
                            <h6 className="blue-text font-weight-bold">Web Designer</h6>
                            <p>
                                <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                                id
                                officiis
                  hic tenetur.</p>


                            <div className="grey-text">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="far fa-star-half"> </i>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="testimonial">

                            <div className="avatar mx-auto">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(27).jpg" alt="example avatar" className="rounded-circle img-fluid" />
                            </div>

                            <h4>John Doe</h4>
                            <h6 className="blue-text font-weight-bold">Web Developer</h6>
                            <p>
                                <i className="fa fa-quote-left"></i> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                                suscipit
                                laboriosam.
                </p>


                            <div className="grey-text">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="testimonial">

                            <div className="avatar mx-auto">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg" alt="example avatar" className="rounded-circle img-fluid" />
                            </div>

                            <h4>Abbey Clark</h4>
                            <h6 className="blue-text font-weight-bold">Photographer</h6>
                            <p>
                                <i className="fa fa-quote-left"></i> Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
                                quam nihil
                                molestiae.
                </p>


                            <div className="grey-text">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="far fa-star"> </i>
                            </div>
                        </div>
                    </div>


                </div>



                <div className="carousel-item">

                    <div className="col-md-4">

                        <div className="testimonial">

                            <div className="avatar mx-auto">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(4).jpg" alt="example avatar" className="rounded-circle img-fluid" />
                            </div>

                            <h4>Blake Dabney</h4>
                            <h6 className="blue-text font-weight-bold">Web Designer</h6>
                            <p>
                                <i className="fa fa-quote-left"></i> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                  laboriosam.</p>


                            <div className="grey-text">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="far fa-star-half"> </i>
                            </div>
                        </div>

                    </div>



                    <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="testimonial">

                            <div className="avatar mx-auto">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(6).jpg" alt="example avatar" className="rounded-circle img-fluid" />
                            </div>

                            <h4>Andrea Clay</h4>
                            <h6 className="blue-text font-weight-bold">Front-end developer</h6>
                            <p>
                                <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                                id
                                officiis
                  hic tenetur quae.</p>


                            <div className="grey-text">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="testimonial">

                            <div className="avatar mx-auto">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(7).jpg" alt="example avatar" className="rounded-circle img-fluid" />
                            </div>

                            <h4>Cami Gosse</h4>
                            <h6 className="blue-text font-weight-bold">Phtographer</h6>
                            <p>
                                <i className="fa fa-quote-left"></i> At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium.</p>


                            <div className="grey-text">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="far fa-star"> </i>
                            </div>
                        </div>
                    </div>


                </div>

                <div className="carousel-item">

                    <div className="col-md-4">

                        <div className="testimonial">

                            <div className="avatar mx-auto">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" alt="example avatar" className="rounded-circle img-fluid" />
                            </div>

                            <h4>Bobby Haley</h4>
                            <h6 className="blue-text font-weight-bold">Web Developer</h6>
                            <p>
                                <i className="fa fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod eos
                                id
                                officiis
                  hic tenetur quae.</p>


                            <div className="grey-text">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="testimonial">

                            <div className="avatar mx-auto">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" alt="example avatar" className="rounded-circle img-fluid" />
                            </div>

                            <h4>Elisa Janson</h4>
                            <h6 className="blue-text font-weight-bold">Marketer</h6>
                            <p>
                                <i className="fa fa-quote-left"></i> At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  blanditiis praesentium.</p>


                            <div className="grey-text">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="far fa-star-half"> </i>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 clearfix d-none d-md-block">
                        <div className="testimonial">

                            <div className="avatar mx-auto">
                                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(9).jpg" alt="example avatar" className="rounded-circle img-fluid" />
                            </div>

                            <h4>Robert Jacobs</h4>
                            <h6 className="blue-text font-weight-bold">Front-end developer</h6>
                            <p>
                                <i className="fa fa-quote-left"></i> Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
                  laboriosam.</p>


                            <div className="grey-text">
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="fa fa-star"> </i>
                                <i className="far fa-star"> </i>
                            </div>
                        </div>
                    </div>


                </div>


            </div>


        </div>
    );
}


export default withStyles(styles)(ImageAvatars);
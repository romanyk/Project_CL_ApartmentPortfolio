import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = {
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
};

const state = {
    city: ["Krakow", "Wroclaw"],
    description: ["Loft Style apartment next to Aqua Park and Quattro", "Studio apartment 15 min away from City Centre"],
    imageUrl: ["https://a0.muscache.com/im/pictures/99a2e677-92b3-45b0-b435-549b162a3c15.jpg",
        "https://a0.muscache.com/im/pictures/ca32182d-5bb8-42b5-b5c4-8855a7c78a15.jpg"],
    button: "Check Details"
}


function MediaCard(props) {

    const selection = [0, 1];

    const { classes } = props;
    return (
        <div className="container">
            <div className="row">

                {selection.map(value => {
                    return (
                        <div className={"col block" + (1 + parseInt(value)) + " card border-secondary "} style={{ margin: 10, minWidth: 150 }} key={value}>

                            <CardActionArea className="card" className="width: 18rem;">
                                <CardMedia
                                    className={classes.media}
                                    image={state.imageUrl[value]}
                                    title={state.city[value]} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {state.city[value]}
                                    </Typography>
                                    <Typography component="p">
                                        {state.description[value]}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Learn More
                    </Button>
                                    <IconButton aria-label="Add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="Share">
                                        <ShareIcon />
                                    </IconButton>
                                </CardActions>
                            </CardActionArea>
                        </div>

                    )
                })}
            </div>
        </div>
    );
}

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
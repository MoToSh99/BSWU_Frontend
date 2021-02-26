import React, { FC, useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import image1 from '../Images/Saly-7.png'
import image2 from '../Images/Saly-10.png'
import image3 from '../Images/Saly-14.png'
import image4 from '../Images/Saly-31.png'
import logo from '../Images/loading.gif'
import {
  Typography,
  Paper,
  Container,
  Grid,
  Box,
  Button,
  ButtonBase,
} from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { User } from "../Models";
import CircularProgress from "@material-ui/core/CircularProgress";
import Carousel from "react-material-ui-carousel";

const useStyles = makeStyles<Theme, any>((theme) => ({
  header: {
    marginTop: 30,
    marginBottom: 60,
  },
  slideshow: {
    marginBottom: 300,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: "auto",
    maxWidth: 500,
  },
  image: {
    width: 128,
    height: 100,
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

export interface LoadingProps {}

const Loading: FC<LoadingProps> = (props) => {
  const classes = useStyles({});
  const history = useHistory();
  const location = useLocation();
  const userinfo: User = location.state.memberDetail;


  const getUserinfo = (usr: string) => {
    fetch(
      `https://datascripttwitter.herokuapp.com/getdata?username=${usr}&count=500`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);

        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    console.log(userinfo)
    getUserinfo(userinfo.username);
  });

  function Slideshow(props) {
    var items = [
      {
        description: "Wow! You have posted " + userinfo.statuses_count + " Tweets since you created your account! Are you OK?",
        image: image1,
      },
      {
        description: "You have " + userinfo.friends_count + " friends on Twitter! Hopefully you have some in real life too.",
        image: image2,
      },
      {
        description: userinfo.verified ? "Your account is verified! I guess you're a pretty big thing, huh" : "Looks like your account isn't verified. Are you not famous enough?",
        image: image3,
      },
      {
        description: userinfo.geo_enabled ? "You have geo-tagged some of your Tweets! You're one of the very few people to have done that. Congrats!" :  "You haven't chosen to geo-tagged any of your Tweets. Don't worry, pretty much no one else has neither.",
        image: image4,
      },
    ];

    return (
      <Carousel
        navButtonsAlwaysInvisible={true}
        indicators={false}
        animation="slide"
        interval={10000}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    );
  }

  function Item(props) {
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container spacing={2}>
                <Grid item xs>
                  <Typography variant="body2" gutterBottom>
                    {props.item.description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="imageoffiguer" src={props.item.image}/>
                </ButtonBase>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </div>
    );
  }

  return (
    <div className={classes.page}>
      <div className={classes.header}>
        <Typography align="center" variant="h5" component="h5">
          Getting things ready...
        </Typography>
      </div>
        <div className={classes.slideshow}>
          <Slideshow />
        </div>
        <Box display="flex" justifyContent="center" alignItems="flex-end">
          <CircularProgress size={200} color="primary" />
        </Box>
    </div>
  );
};

export default Loading;

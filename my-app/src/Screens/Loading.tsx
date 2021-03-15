import React, { FC, useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import image1 from "../Images/Saly-7.png";
import image2 from "../Images/Saly-10.png";
import image3 from "../Images/Saly-14.png";
import image4 from "../Images/Saly-31.png";
import Lottie from "react-lottie";
import logo from "../Images/loading.gif";
import LoadingInfo from "../Components/Loading/LoadingInfo"
import * as twitterbird from "../Images/Twitter.json";
import * as friends from "../Images/friends.json";
import * as verified from "../Images/verified.json";
import * as geolocalization from "../Images/geolocalization.json";
import * as development from "../Images/web-development.json";

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
  page: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
  },
  header: {
    marginTop: 30,
    marginBottom: 60,
  },
  slideshow: {
    marginBottom: 180,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
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

const defaultOptions = {
  loop: false,
  autoplay: true,
  animationData: twitterbird.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const geolocalizationA = {
  loop: false,
  autoplay: true,
  animationData: geolocalization.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const friendsA = {
  loop: false,
  autoplay: true,
  animationData: friends.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const verifiedA = {
  loop: true,
  autoplay: true,
  animationData: verified.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const developmentA = {
  loop: true,
  autoplay: true,
  animationData: development.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
export interface LoadingProps {}

const sleep = (milliseconds : number) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}

const Loading: FC<LoadingProps> = (props) => {
  const classes = useStyles({});
  const history = useHistory();
  const location = useLocation();
  const userinfo: User = location.state.memberDetail;


  const getUserinfoTest12 = (usr: string) => {
    fetch(`https://datascripttwitter.herokuapp.com/checkusername?username=${usr}`)
      .then(res => res.json())
      .then(
        (result) => {
          (result["Userdata"]) ? getUserinfo(usr) : getUserinfoTest12(usr)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  const getUserinfoTest2 = (usr: string) => {
    fetch(`https://datascripttwitter.herokuapp.com/gettwitterdata?username=${usr}&count=2000`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          getUserinfoTest12(usr)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  const getUserinfo = (usr: string) => {
    fetch(
      `https://datascripttwitter.herokuapp.com/getdata?username=${usr}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result["Error"]) getUserinfoTest12(usr)
          else{
          console.log(result);

          history.push({
            pathname: "/story",
            state: { memberDetail: result },
          });
        }
        },
        (error) => {
          console.log(error);
        }
      );
  };

  useEffect(() => {
    console.log(userinfo);
    getUserinfoTest2(userinfo.username);
  });

  function Slideshow(props) {
    var items = [
      {
        description:
          "Wow! You have posted " +
          userinfo.statuses_count +
          " Tweets since you created your account. Are you OK?",
        image: <Lottie options={defaultOptions} height={120} width={120} />,
      },
      {
        description:
          "You have " +
          userinfo.friends_count +
          " friends on Twitter! Hopefully you have some in real life too.",
        image: <Lottie options={friendsA} height={120} width={120} />
      },
      {
        description: userinfo.verified
          ? "Your account is verified! I guess you're a pretty big thing, huh?"
          : "Looks like your account isn't verified. Are you not famous enough?",
        image: <Lottie options={verifiedA} height={120} width={120} />
      },
      {
        description: userinfo.geo_enabled
          ? "You have geo-tagged some of your Tweets! You're one of the very few people to have done that. Congrats!"
          : "You haven't chosen to geo-tag any of your Tweets. Don't worry, you're not exactly missing out.",
        image: <Lottie options={geolocalizationA} height={120} width={120} />
      },
    ];

    return (
      <Carousel
        navButtonsAlwaysInvisible={true}
        indicators={false}
        animation="fade"
        interval={5000}
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
        <Paper className={classes.paper} elevation={3}>
          <Grid container spacing={5} direction="column" alignItems="center" justify="center">
            <Grid item xs={12} sm container>
              <Grid item xs container spacing={2}>
                <Grid item xs>
                  <Typography variant="body1" gutterBottom>
                    {props.item.description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
               {props.item.image}
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
        <Lottie options={developmentA} />
      </Box>
    </div>
  );
};

export default Loading;

import React, { FC } from "react"
import Lottie from "react-lottie";
import Carousel from "react-material-ui-carousel";
import * as twitterbird from "../Images/Twitter.json";
import * as friends from "../Images/friends.json";
import * as verified from "../Images/verified.json";
import * as geolocalization from "../Images/geolocalization.json";
import * as development from "../Images/web-development.json";
import * as legoData from "../Images/legoloading.json";
import * as doneData from "../Images/doneloading.json";
import * as analyze from "../Images/analyze.json";
import * as press from "../Images/press.json";
import * as abraham from "../Images/abraham.json";
import {
    Typography,
    Paper,
    Container,
    Grid,
    Box,
    Button,
    ButtonBase,
    Avatar,
  } from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";


const useStyles = makeStyles<Theme, any>((theme) => ({
    page: {
      display: "flex",
      flexDirection: "column",
      justifyItems: "center",
      alignItems: "center",
      padding: "30px",
      margin: "auto",
      width: "100%",
      height: "100vh",
    },
    center: {
      margin: "auto",
    },
    slideshow: {
      marginBottom: "30px",
    },
    header: {
      marginBottom: "30px",
    },
    paper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: theme.spacing(2),
      maxWidth: 500,
      height: 184,
      borderRadius: "20px",
      boxShadow: "white",
    },
  }));
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: doneData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const twitterbirdA = {
    loop: false,
    autoplay: true,
    animationData: twitterbird.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const geolocalizationA = {
    loop: true,
    autoplay: true,
    animationData: geolocalization.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const friendsA = {
    loop: false,
    autoplay: true,
    animationData: friends.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const verifiedA = {
    loop: true,
    autoplay: true,
    animationData: verified.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const analyzeA = {
    loop: true,
    autoplay: true,
    animationData: analyze.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const pressA = {
    loop: true,
    autoplay: true,
    animationData: press.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const abrahamA = {
    loop: true,
    autoplay: true,
    animationData: abraham.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const developmentA = {
    loop: true,
    autoplay: true,
    animationData: development.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

export type SlideshowProps = {
    userinfo: UserDetail
  }
  


  const Slideshow: FC<SlideshowProps> = ({ userinfo }) => {

    const classes = useStyles({});
    
    function Item(props) {
        return (
          <Paper className={classes.paper} elevation={3}>
            <Grid
              container
              spacing={5}
              direction="column"
              alignItems="center"
              justify="center"
            >
              <Grid item xs={12} sm container>
                <Grid item xs container spacing={2}>
                  <Grid item xs>
                    <Typography variant="body1" gutterBottom>
                      {props.item.description}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>{props.item.image}</Grid>
              </Grid>
            </Grid>
          </Paper>
        );
      }

    var items = [
      {
        description:
          "Your Tweets are getting analyzed and assigned a happiness score between 1 and 9.",
        image: (
          <Lottie
            options={analyzeA}
            height={120}
            width={120}
            isClickToPauseDisabled
          />
        ),
      },
      {
        description:
          "You can press on the left or right side of the screen to move forwards and backwards.",
        image: (
          <Lottie
            options={pressA}
            height={120}
            width={120}
            isClickToPauseDisabled
          />
        ),
      },
      {
        description:
          '"Folks are usually about as happy as they make their minds up to be" \n - Abraham Lincoln.',
        image: (
          <Lottie
            options={abrahamA}
            height={120}
            width={120}
            isClickToPauseDisabled
          />
        ),
      },
      {
        description:
          "Wow! You have posted " +
          userinfo.statuses_count +
          " Tweets since you created your account. Are you OK?",
        image: (
          <Lottie
            options={twitterbirdA}
            height={120}
            width={120}
            isClickToPauseDisabled
          />
        ),
      },
      {
        description:
          "You have " +
          userinfo.friends_count +
          " friends on Twitter! Hopefully you have some in real life too.",
        image: (
          <Lottie
            options={friendsA}
            height={120}
            width={120}
            isClickToPauseDisabled
          />
        ),
      },
      {
        description: userinfo.verified
          ? "Your account is verified! I guess you're a pretty big thing, huh?"
          : "Looks like your account isn't verified. Are you not famous enough?",
        image: (
          <Lottie
            options={verifiedA}
            height={120}
            width={120}
            isClickToPauseDisabled
          />
        ),
      },
    ];

    return (
      <Carousel
        navButtonsAlwaysInvisible={true}
        indicators={false}
        animation="fade"
        interval={8000}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    );
  }


export default Slideshow
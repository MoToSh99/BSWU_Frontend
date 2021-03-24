import React, { FC, useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Lottie from "react-lottie";
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
import FadeIn from "react-fade-in";

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
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    alignItems: "center",
    padding: "30px",
    margin: "auto",
    width: "100%",
    height: "100vh"
  },
  center: {
    margin: "auto",
  },
  slideshow: {
  },
  header: {
    marginBottom: "30px"
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
    boxShadow: "white"

  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const twitterbirdA = {
  loop: false,
  autoplay: true,
  animationData: twitterbird.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const geolocalizationA = {
  loop: true,
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

const analyzeA = {
  loop: true,
  autoplay: true,
  animationData: analyze.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const pressA = {
  loop: true,
  autoplay: true,
  animationData: press.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const abrahamA = {
  loop: true,
  autoplay: true,
  animationData: abraham.default,
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
  const [done, setDone] = React.useState(false);
  const [loading, setLoading] = React.useState(true)
  const [loading2, setLoading2] = React.useState(true)


  const checkUsername = (usr: string) => {
    fetch(`https://happytweet.azurewebsites.net/checkusername?username=${usr}`)
      .then(res => res.json())
      .then(
        (result) => {
          (result["Userdata"]) ? getUserinfo(usr) : checkUsername(usr)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  const gettwitterdata = (usr: string) => {
    fetch(`https://happytweet.azurewebsites.net/gettwitterdata?username=${usr}&count=100`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          checkUsername(usr)
        },
        (error) => {
          console.log(error)
        }
      )
  }

  const getUserinfo = (usr: string) => {
    fetch(
      `https://happytweet.azurewebsites.net/getdata?username=${usr}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result["Error"]) checkUsername(usr)
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
    gettwitterdata(userinfo.username);
  });

  function Slideshow(props) {
    var items = [
      {
        description: "Your Tweets are getting analyzed and getting a happiness score between 1-9",
        image: <Lottie options={analyzeA} height={120} width={120} />
      },
      {
        description: "You can press on the left or right side of the screen to move forward or backward.",
        image: <Lottie options={pressA} height={120} width={120} />
      },
      {
        description: "Folks are usually about as happy as they make their minds up to be \n - Abraham Lincoln",
        image: <Lottie options={abrahamA} height={120} width={120} />
      },
      {
        description:
          "Wow! You have posted " +
          userinfo.statuses_count +
          " Tweets since you created your account. Are you OK?",
        image: <Lottie options={twitterbirdA} height={120} width={120} />,
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

  function Item(props) {
    return (
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
    );
  }

  return (
    <div className={classes.page}>
      <div className={classes.center} >
      <div className={classes.header}>
      {!done ? (
          <FadeIn>
            <div className="d-flex justify-content-center align-items-center">
            <Typography align="center" variant="h5" component="h5">
            Fetching Twitter data
            </Typography>
            </div>
          </FadeIn>
          
        ) : (
          <h1>Done</h1>
        )}
      </div>
      <div className={classes.slideshow}>
        <Slideshow />
      </div>
      {loading ? (
                <Lottie options={defaultOptions} height={120} width={120} />
              ) : (
                <Lottie options={defaultOptions2} height={120} width={120} />
              )}
      </div>

    </div>
  );
};

export default Loading;

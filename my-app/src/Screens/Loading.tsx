import React, { FC, useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import FadeIn from "react-fade-in";
import {
  Typography,
  Box,
  Avatar,
} from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { User } from "../Models";
import "react-sweet-progress/lib/style.css";
import Slideshow from "../Components/Slideshow";
import * as legoData from "../Images/legoloading.json";
import Lottie from "react-lottie";

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
    marginBottom: "10px",
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
  avatar: {
    height: 50,
    width: 50,
    boxShadow: "0 0 0 1px #000",
  },
  avatarbox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    background: "white",
    borderRadius: "20px",
    padding: "3px 10px 3px 10px",
    width: "70%",
    margin: "4px",
  },
  avatartext: {
    color: "black",
    padding: "10px",
  },
  progress: {
    margin: "30",
    color: "white",
  },
  symbol: {
    color: "white",
  },
}));

export interface LoadingProps {}


const Loading: FC<LoadingProps> = (props) => {
  const classes = useStyles({});
  const history = useHistory();
  const location = useLocation();
  const userinfo: User = location.state.memberDetail;
  const sliderValue: Number = location.state.slider;
  const [done, setDone] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const url = "https://sharifhome.duckdns.org";
  //const url = "http://127.0.0.1:5000";

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  


  const gettwitterdata = (usr: string) => {
    fetch(`${url}/gettwitterdata?username=${usr}&count=${sliderValue}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);
          history.push({
            pathname: "/story",
            state: { memberDetail: result },
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };


  const loadpreloaded = (usr: string) => {
    fetch(`preloaded/${usr}.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result);

          history.push({
            pathname: "/story",
            state: { memberDetail: result },
          });
        },
        (error) => {
          console.log(error);
        }
      );
  };



  useEffect(() => {
    console.log(userinfo);
    gettwitterdata(userinfo.username);
  }, []);



  return (
    <div className={classes.page}>
      <div className={classes.center}>
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
          <Slideshow userinfo={userinfo} />
        </div>

        {loading ? (
                <Lottie options={defaultOptions} height={120} width={120} />
              ) : (
                <Lottie options={defaultOptions2} height={120} width={120} />
              )}

      </div>
{/*
      <Typography variant="h6">Choose a preloaded user instead</Typography>
      <Box
        onClick={() => loadpreloaded("TimCook")}
        className={classes.avatarbox}
        boxShadow={3}
      >
        <Avatar
          alt="Tim Cook"
          src={
            "https://pbs.twimg.com/profile_images/1194113737092935681/63O1znGw.jpg"
          }
          className={classes.avatar}
        />
        <Typography variant="subtitle1" className={classes.avatartext}>
          Tim Cook
        </Typography>
      </Box>
       <Box
        onClick={() => loadpreloaded("BillGates")}
        className={classes.avatarbox}
        boxShadow={3}
      >
        <Avatar
          alt="Bill Gates"
          src={
            "https://pbs.twimg.com/profile_images/988775660163252226/XpgonN0X.jpg"
          }
          className={classes.avatar}
        />
        <Typography variant="subtitle1" className={classes.avatartext}>
          Bill Gates
        </Typography>
      </Box>
      <Box
        onClick={() => loadpreloaded("Potus")}
        className={classes.avatarbox}
        boxShadow={3}
      >
        <Avatar
          alt="President Biden"
          src={
            "https://pbs.twimg.com/profile_images/1380530524779859970/TfwVAbyX.jpg"
          }
          className={classes.avatar}
        />
        <Typography variant="subtitle1" className={classes.avatartext}>
          President Biden
        </Typography>
      </Box>  */}
    </div>
  );
};

export default Loading;

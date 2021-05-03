import React, { FC, useEffect } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import FadeIn from "react-fade-in";
import {
  Typography,
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

export interface LoadingProps { }


const Loading: FC<LoadingProps> = (props) => {
  const classes = useStyles({});
  const history = useHistory();
  const location = useLocation();
  const userinfo: User = location.state.memberDetail;
  const sliderValue: Number = location.state.slider;

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

  useEffect(() => {
    console.log(userinfo);
    gettwitterdata(userinfo.username);
  }, []);

  return (
    <div className={classes.page}>
      <div className={classes.center}>
        <div className={classes.header}>
          <FadeIn>
            <div className="d-flex justify-content-center align-items-center">
              <Typography align="center" variant="h5" component="h5">
                Fetching Twitter data
                </Typography>
            </div>
          </FadeIn>
        </div>
        <div className={classes.slideshow}>
          <Slideshow userinfo={userinfo} />
        </div>
        <Lottie options={defaultOptions} height={120} width={120} />
      </div>
    </div>
  );
};

export default Loading;

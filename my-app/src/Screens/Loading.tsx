import React, { FC, useEffect, useState } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import FadeIn from "react-fade-in";
import { Typography, Button } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";
import { User } from "../Models";
import "react-sweet-progress/lib/style.css";
import Slideshow from "../Components/Slideshow";
import * as legoData from "../Images/legoloading.json";
import Lottie from "react-lottie";
import { Alert } from "@material-ui/lab";

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
  errorTextHidden: {
    textAlign: "center",
    visibility: "hidden",
  },
  errorText: {
    textAlign: "center",
    visibility: "visible",
  },
}));

export interface LoadingProps {}

const Loading: FC<LoadingProps> = (props) => {
  const classes = useStyles({});
  const history = useHistory();
  const location = useLocation();
  const userinfo: User = location.state.memberDetail;
  const sliderValue: Number = location.state.slider;
  const [errorLoading, setError] = useState(0);
  const [errorLoading2, setError2] = useState(false);

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

  const goHome = () => {
    history.push({
      pathname: "/",
    });
  }

  async function fetchWithTimeout(resource, options) {
    const { timeout = 8000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
      ...options,
      signal: controller.signal,
    });
    clearTimeout(id);

    return response;
  }

  async function loadData(usr: string, errorNew = false) {
    try {
      const response = await fetchWithTimeout(
        `${url}/gettwitterdata?username=${usr}&count=${sliderValue}`,
        {
          timeout: 45000,
        }
      );
      const result = await response.json();
      history.push({
        pathname: "/story",
        state: { memberDetail: result },
      });
    } catch (error) {
      const errortrue = error.name === "AbortError";
      if (errorNew) {
        setError(2);
        setError2(true);
      } else {
        setError(1);
        loadData(usr, true);
      }
    }
  }

  useEffect(() => {
    setError(0);
    loadData(userinfo.username);
  }, []);

  let customAlert;
  if (errorLoading === 0) {

  }
  if (errorLoading === 1) {
    customAlert = (
        <FadeIn>
          <Alert severity="info">Loading data taking longer than usual</Alert>
        </FadeIn>
    )
  }
  if (errorLoading === 2) {
    customAlert = (
      <FadeIn>
        <Alert
          action={
            <Button color="inherit" size="small" onClick={goHome}>
              Try again
            </Button>
          }
          severity="error"
        >
          {" "}
          Problem loading the Twitter data
        </Alert>
      </FadeIn>
    )
  }

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
        {customAlert}
      </div>
    </div>
  );
};

export default Loading;

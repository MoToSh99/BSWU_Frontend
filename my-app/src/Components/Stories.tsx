import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import EvolvedHapiness from "../Screens/Stories/EvolvedHapiness";
import { Button } from "@material-ui/core";
import { useLocation, useHistory } from "react-router-dom";

const useStyles = makeStyles({
  page: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
  },
  bar: {
    margin: 20,
  },
  button: {
    width: window.innerWidth / 2,
    height: window.innerHeight,
    backgroundColor: "Transparent",
    border: "none",
    outline: "none",
  },
  overlay: {
    display: "flex",
    top: 0,
    position: "absolute",
    width: window.innerWidth,
    height: window.innerHeight,
  },
  applyZIndex: {
    zIndex: 1,
  },
  applyZ0Index: {
    zIndex: 0,
  },
});

const Stories = (stories) => {
  const history = useHistory();
  const location = useLocation();

  const onProgressChange = (up: Boolean) => {
    console.log(progress);
    console.log(page);
    if (up) {
      if (page === stories["stories"].length - 1) {
        history.push({
          pathname: "/done",
        });
      } else {
        setProgress(progress + 100 / stories["stories"].length);
        setPage(page + 1);
      }
    } else {
      if (page === 0) {
        setProgress(progress);
      } else {
        setProgress(progress - 100 / stories["stories"].length);
        setPage(page - 1);
      }
    }
  };

  const classes = useStyles();

  const [progress, setProgress] = React.useState(0);
  const [page, setPage] = React.useState(0);
  return (
    <>
      <div className={classes.page}>
        <LinearProgress
          variant="determinate"
          value={progress}
          className={classes.bar}
        />


        <div className={(stories["stories"][page].overlay) ? classes.applyZIndex : classes.applyZ0Index}>
          {stories["stories"][page].object}
        </div>
      </div>
      <div className={classes.overlay}>
        <div
          onClick={() => onProgressChange(false)}
          className={classes.button}
        />
        <div
          onClick={() => onProgressChange(true)}
          className={classes.button}
        />
      </div>
    </>
  );
};

export default Stories;

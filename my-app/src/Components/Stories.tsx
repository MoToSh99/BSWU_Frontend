import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserDetail } from "../Models";

const useStyles = makeStyles({
  page: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
  },
  bar: {
    margin: 20,
    hidden: "true"
  },
  hidden: {
    display: "none"
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

const Stories = (stories, user : UserDetail) => {
  const history = useHistory();
  const location = useLocation();

  const onProgressChange = (up: Boolean) => {
    if (up) {
      if (page === stories["stories"].length - 2 ) {
        setHidden(true);
        setPage(page + 1);
      } else if (page === stories["stories"].length - 1) {

      } else {
        setProgress(progress + 100 / (stories["stories"].length - 1));
        setPage(page + 1);
      }
    } else {
      if (page === 0) {
        setProgress(progress);
      } else {
        setProgress(progress - 100 / (stories["stories"].length - 1));
        setPage(page - 1);
      }
    }
  };

  const classes = useStyles();

  const [progress, setProgress] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [hidden, setHidden] = React.useState(false);
  return (
    <>
      <div className={classes.page}>
        <LinearProgress
          variant="determinate"
          value={progress}
          className={hidden ? classes.hidden : classes.bar}
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

import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useLocation } from "react-router-dom";
import { UserDetail } from "../Models";
import EvolvedHapiness from '../Screens/Stories/EvolvedHapiness'
import Compare from '../Screens/Stories/Compare';
import WeekdayScores from '../Screens/Stories/WeekdayScores'
import TopFive from "../Screens/Stories/TopFive";
import Done from "../Screens/Done";
import Overall from "../Screens/Stories/Overall";
import Happiest from "../Screens/Stories/Happiest";
import Unhappiest from "../Screens/Stories/Unhappiest";
import Overlay from "./Overlay";

const useStyles = makeStyles({
  page: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    "& .MuiLinearProgress-colorSecondary": {
      backgroundColor: "white"
    },
    "& .MuiLinearProgress-barColorSecondary": {
      backgroundColor: "green"
    }
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
});

const Stories = () => {
  const location = useLocation();
  const user: UserDetail = location.state.memberDetail

  const storiesAmount = 8

  const onProgressChange = (up: Boolean) => {
    if (up) {
      if (page === storiesAmount - 2) {
        setHidden(true);
        setPage(page + 1);
      } else if (page === storiesAmount - 1) {

      } else {
        setProgress(progress + 100 / (storiesAmount - 1));
        setPage(page + 1);
      }
    } else {
      if (page === 0) {
        setProgress(progress);
      } else if (page === storiesAmount - 1) {

      } else {
        setProgress(progress - 100 / (storiesAmount - 1));
        setPage(page - 1);
      }
    }
  };

  const stories = [
    { object: <Overall user={user} /> },
    { object: <EvolvedHapiness user={user} /> },
    { object: <Happiest user={user} /> },
    { object: <Unhappiest user={user} /> },
    { object: <TopFive user={user} /> },
    { object: <Compare user={user} /> },
    { object: <WeekdayScores user={user} /> },
    { object: <Done user={user} /> }
  ];

  const classes = useStyles();

  const [progress, setProgress] = React.useState(0);
  const [page, setPage] = React.useState(0);
  const [hidden, setHidden] = React.useState(false);
  return (
    <>
      <div className={classes.page}>
        <LinearProgress
          color="secondary"
          variant="determinate"
          value={progress}
          className={hidden ? classes.hidden : classes.bar}
        />
        {stories[page].object}
      </div>
      <Overlay onProgressChange={onProgressChange} />
    </>
  );
};

export default Stories;

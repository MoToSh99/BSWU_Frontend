import LinearProgress from "@material-ui/core/LinearProgress";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { UserDetail } from "../Models";
import EvolvedHapiness from '../Screens/Stories/EvolvedHapiness'
import Compare from '../Screens/Stories/Compare';
import WeekdayScores from '../Screens/Stories/WeekdayScores'
import TopFive from "../Screens/Stories/TopFive";
import Done from "../Screens/Done";
import Overall from "../Screens/Stories/Overall";
import Happiest from "../Screens/Stories/Happiest";
import Unhappiest from "../Screens/Stories/Unhappiest";


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

const Stories = () => {
  const history = useHistory();
  const location = useLocation();
  const user : UserDetail = location.state.memberDetail

  const storiesAmount = 8

  const onProgressChange = (up: Boolean) => {
    if (up) {
      if (page === storiesAmount - 2 ) {
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
        setHidden(false);
        setPage(page - 1);
      } else {
        setProgress(progress - 100 / (storiesAmount - 1));
        setPage(page - 1);
      }
    }
  };

const stories = [
    {object : <Overall user={user} onProgressChange={onProgressChange} />, overlay : false},
    {object : <EvolvedHapiness/>, overlay : true},
    {object : <Happiest user={user} />, overlay : false},
    {object : <Unhappiest user={user} />, overlay : false},
    {object : <TopFive user={user} />, overlay : false},
    {object : <Compare user={user} />, overlay : false},
    {object : <WeekdayScores user={user} />, overlay : false},
    {object : <Done user={user} />, overlay : true},
 ];



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
        {stories[page].object}
      </div>
    </>
  );
};

export default Stories;

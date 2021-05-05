import { makeStyles, Theme } from "@material-ui/core";
import React, { FC } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles<Theme, any>((theme) => ({
  overlay: {
    display: "flex",
    top: 0,
    position: "absolute",
    width: window.innerWidth,
    height: window.innerHeight,
  },
  buttonLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    width: window.innerWidth / 2,
    height: window.innerHeight,
    backgroundColor: "Transparent",
    border: "none",
    outline: "none",
  },
  buttonRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-end",
    width: window.innerWidth / 2,
    height: window.innerHeight,
    backgroundColor: "Transparent",
    border: "none",
    outline: "none",
  },
  iconLeft: {
    paddingLeft: 3,
	color: "white"
  },
  iconRight: {
    paddingRight: 0,
	color: "white"
  },
}));

export type OverlayProps = {
  onProgressChange: Function;
};

const Overlay: FC<OverlayProps> = ({ onProgressChange }) => {
  const classes = useStyles({});
  return (
    <div className={classes.overlay}>
      <div
        onClick={() => onProgressChange(false)}
        className={classes.buttonLeft}
      >
        <div className={classes.iconLeft}>
          <ArrowBackIosIcon />
        </div>
      </div>
      <div
        onClick={() => onProgressChange(true)}
        className={classes.buttonRight}
      >
        <div className={classes.iconRight}>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  );
};

export default Overlay;

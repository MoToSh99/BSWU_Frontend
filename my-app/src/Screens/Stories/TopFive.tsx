import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  Button,
} from "@material-ui/core";
import { UserDetail } from "../../Models";

const useStyles = makeStyles<Theme, any>((theme) => ({
  page: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    justifyItems: "center",
    backgroundColor: theme.palette.background.default,
  },
  titleContainer: {
    marginTop: 30,
  },
  buttonGroup: {
      display: "flex",
      justifyContent: "center",
      margin: 30
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
},
button: {
    margin: 20,
},
}));

export interface TopFiveProps {
  user: UserDetail;
}

const TopFive: FC<TopFiveProps> = ({ user }) => {
  const classes = useStyles({});

  const top = [];

  user.topfivewords.top.forEach((word) => {
    top.push(
      <Button variant="contained" color="primary" size="large" className={classes.button}>
        {word}
      </Button>
    );
  });

  const bottom = [];

  user.topfivewords.bottom.forEach((word) => {
    bottom.push(
      <Button variant="contained" color="secondary" size="large" className={classes.button}>
        {word}
      </Button>
    );
  });

  return (
    <div className={classes.page}>
      <div className={classes.titleContainer}>
        <Typography
          className={classes.overallText}
          align="center"
          variant="h5"
          component="h5"
        >
          Top 5 happiest and unhappiest words
        </Typography>
      </div>

      <div className={classes.buttonGroup}>
        <div className={classes.buttons}>{top}</div>
        <div className={classes.buttons}>{bottom}</div>
      </div>
    </div>
  );
};

export default TopFive;

import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  Button,
} from "@material-ui/core";
import { UserDetail } from "../../Models";
import FadeIn from "react-fade-in";

const useStyles = makeStyles<Theme, any>((theme) => ({
  page: {
    padding: 30,
    display: "flex",
    flexDirection: "column"
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
    textTransform: "none"
  },
}));

export interface TopFiveProps {
  user: UserDetail;
}

const TopFive: FC<TopFiveProps> = ({ user }) => {
  const classes = useStyles({});

  const top = user.topfivewords.top.map((word) =>
    <Button key={word} variant="contained" color="primary" size="large" className={classes.button}>
      {word}
    </Button>
  )

  const bottom = user.topfivewords.bottom.map((word) =>
    <Button key={word} variant="contained" color="secondary" size="large" className={classes.button}>
      {word}
    </Button>
  )

  return (
    <div className={classes.page}>
      <div>
        <Typography
          align="center"
          variant="h5"
          component="h5"
        >
          Your top 5 happiest and unhappiest words
        </Typography>
      </div>
      <div className={classes.buttonGroup}>
        <FadeIn >
          <div className={classes.buttons}>{top}</div>
        </FadeIn>
        <FadeIn delay={300}>
          <div className={classes.buttons}>{bottom}</div>
        </FadeIn>
      </div>
    </div>
  );
};

export default TopFive;

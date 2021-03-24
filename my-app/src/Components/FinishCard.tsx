import {
  Avatar,
  Box,
  CircularProgress,
  makeStyles,
  Paper,
  Theme,
  Typography,
  Grid,
} from "@material-ui/core";
import React, { FC } from "react";
import { UserDetail } from "../Models";
import dk from "../Images/dk.png";
import { ReactComponent as Logo } from "../Images/logo.svg";
import { getGaugeColor } from '../Helpers';

const useStyles = makeStyles<Theme, any>((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    backgroundColor: "#25335A",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 15,
  },
  bottom: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  gaugeBox: {
    position: "relative",
    marginBottom: "12px",
    marginTop: "8px",
  },
  username: {
    color: "black",
  },
  img: {
    marginTop: "8px",
    width: 30,
  },
  red: {
    color: "red",
    fontSize: "22px",
  },
  green: {
    color: "lightgreen",
    fontSize: "22px",
    marginBottom: "8px",
  },
  blueText: {
    color: "#66FCF1",
    fontSize: 28,
    marginTop: 5,
    marginBottom: 5,
  },
  avatar: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "4px",
    width: 70,
    height: 70,
    border: "1px solid white",
  },
  logo: {
    width: "50%",
  },
}));

export type FinishCardProps = {
  user: UserDetail;
};

const FinishCard: FC<FinishCardProps> = ({ user }) => {
  const classes = useStyles({});

  const gaugeColor = getGaugeColor(user.overallscore);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={3}>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div className={classes.top}>
              <div className={classes.avatarContainer}>
                <Avatar
                  alt="Remy Sharp"
                  src={user.userinfo.profile_image_url}
                  className={classes.avatar}
                />
                <Typography variant="h6" className={classes.usernames}>
                  @{user.userinfo.username}
                </Typography>
              </div>
            </div>
            <Typography variant="subtitle2" component="div">
              You are among the
            </Typography>
            <Typography className={classes.blueText}>
              {user.danishuserscore.percent}%
            </Typography>
            <Typography variant="subtitle2" component="div">
              happiest people in
            </Typography>
            <img className={classes.img} src={dk} alt="Denmark" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="subtitle1" component="div">
             Happiness score
            </Typography>
            <Box className={classes.gaugeBox}>
              <Box>
                <CircularProgress
                  style={{color: gaugeColor}}
                  variant="determinate"
                  value={58}
                  size={90}
                  thickness={2.5}
                />
              </Box>
              <Box
                top={4}
                left={4}
                bottom={10}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="h6" component="div">
                  {user.overallscore}
                </Typography>
              </Box>
            </Box>
            <Typography variant="subtitle2" component="div">
              Happiest word:
            </Typography>
            <Typography className={classes.green} component="div">
              {user.topfivewords.top[0]}
            </Typography>
            <Typography variant="subtitle2" component="div">
              Unhappiest word:{" "}
            </Typography>
            <Typography className={classes.red} component="div">
              {user.topfivewords.bottom[0]}
            </Typography>
          </Grid>
        </Grid>
        <Logo className={classes.logo} />
      </Paper>
    </div>
  );
};

export default FinishCard;

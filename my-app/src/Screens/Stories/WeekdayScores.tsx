import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  CircularProgress
} from "@material-ui/core";
import { UserDetail } from "../../Models";

const useStyles = makeStyles<Theme, any>((theme) => ({
  page: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    backgroundColor: theme.palette.background.default,
  },
  gauge: {
    color: "#66FCF1"
  },
  gaugeBox: {
    position: "relative",
    marginTop: 25
  },
  weekdaysBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 14
  },
  middleWeekday: {
    position: "relative",
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25
  },
  scoreLabel: {
      marginBottom: 20
  }
}));

export interface WeekdayScoresProps {
  user: UserDetail;
}

const WeekdayScores: FC<WeekdayScoresProps> = ({ user }) => {
  const classes = useStyles({});

  return (
    <div className={classes.page}>
        <div className={classes.titleContainer}>
            <Typography
            className={classes.overallText}
            align="center"
            variant="h5"
            component="h5"
            >
            Your happiest day of the week
            </Typography>
        </div>
        <div>
        <Box className={classes.gaugeBox}>
            <CircularProgress className={classes.gauge} variant="determinate" value={100} size={100} thickness={1.5} />
            <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center">
                <Typography variant="h4" component="div">{user.weekscores[0].Score}</Typography>
            </Box>
        </Box>
        <Typography variant="h5">{user.weekscores[0].Day}</Typography>
        </div>
        <Box className={classes.weekdaysBox}>
            <Box className={classes.gaugeBox}>
                <CircularProgress className={classes.gauge} variant="determinate" value={100} size={80} thickness={1.5} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography className={classes.scoreLabel} variant="h5" component="div">{user.weekscores[1].Score}</Typography>
                </Box>
                <Typography>{user.weekscores[1].Day}</Typography>
            </Box>
            <Box className={classes.middleWeekday}>
                <CircularProgress className={classes.gauge} variant="determinate" value={100} size={80} thickness={1.5} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography className={classes.scoreLabel} variant="h5" component="div">{user.weekscores[2].Score}</Typography>
                </Box>
                <Typography>{user.weekscores[2].Day}</Typography>
            </Box>
            <Box className={classes.gaugeBox}>
                <CircularProgress className={classes.gauge} variant="determinate" value={100} size={80} thickness={1.5} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography className={classes.scoreLabel} variant="h5" component="div">{user.weekscores[3].Score}</Typography>
                </Box>
                <Typography>{user.weekscores[3].Day}</Typography>
            </Box>
        </Box>
        <Box className={classes.weekdaysBox}>
            <Box className={classes.gaugeBox}>
                <CircularProgress className={classes.gauge} variant="determinate" value={100} size={80} thickness={1.5} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography className={classes.scoreLabel} variant="h5" component="div">{user.weekscores[4].Score}</Typography>
                </Box>
                <Typography>{user.weekscores[4].Day}</Typography>
            </Box>
            <Box className={classes.middleWeekday}>
                <CircularProgress className={classes.gauge} variant="determinate" value={100} size={80} thickness={1.5} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography className={classes.scoreLabel} variant="h5" component="div">{user.weekscores[5].Score}</Typography>
                </Box>
                <Typography>{user.weekscores[5].Day}</Typography>
            </Box>
            <Box className={classes.gaugeBox}>
                <CircularProgress className={classes.gauge} variant="determinate" value={100} size={80} thickness={1.5} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography className={classes.scoreLabel} variant="h5" component="div">{user.weekscores[6].Score}</Typography>
                </Box>
                <Typography>{user.weekscores[6].Day}</Typography>
            </Box>
        </Box>
    </div>
  )
}

export default WeekdayScores;

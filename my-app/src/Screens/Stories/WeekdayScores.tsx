import React, { FC } from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  Box,
  CircularProgress
} from "@material-ui/core";
import { UserDetail } from "../../Models";
import FadeIn from 'react-fade-in';
import { getGaugeColor } from '../../Helpers';

const useStyles = makeStyles<Theme, any>((theme) => ({
  page: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
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
    marginTop: 15
  },
  middleWeekday: {
    position: "relative",
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25
  },
  scoreLabel: {
      marginBottom: 30
  },
  weekdayText: {
    marginTop: 5
  }
}));

export interface WeekdayScoresProps {
  user: UserDetail;
}

const WeekdayScores: FC<WeekdayScoresProps> = ({ user }) => {
  const classes = useStyles({});

  const [fade, setFade] = React.useState(false);

  const firstGaugeColor = getGaugeColor(user.weekscores[0].Score);
  const secondGaugeColor = getGaugeColor(user.weekscores[1].Score);
  const thirdGaugeColor = getGaugeColor(user.weekscores[2].Score);
  const fourthGaugeColor = getGaugeColor(user.weekscores[3].Score);
  const fifthGaugeColor = getGaugeColor(user.weekscores[4].Score);
  const sixthGaugeColor = getGaugeColor(user.weekscores[5].Score);
  const seventhGaugeColor = getGaugeColor(user.weekscores[6].Score);

  React.useEffect(() => {
		setFade(true);
	});

  return (
    <div className={classes.page}>
        <div>
            <Typography
            align="center"
            variant="h5"
            component="h5"
            >
            Your happiest day of the week
            </Typography>
        </div>
        <FadeIn delay={300} visible={fade}>
          <div>
            <Box className={classes.gaugeBox}>
                <CircularProgress style={{color: firstGaugeColor}} variant="determinate" value={100} size={100} thickness={1.5} />
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
            <Typography className={classes.weekdayText} variant="h5">{user.weekscores[0].Day}</Typography>
          </div>
          <Box className={classes.weekdaysBox}>
            <Box className={classes.gaugeBox}>
                <CircularProgress style={{color: secondGaugeColor}} variant="determinate" value={100} size={80} thickness={1.5} />
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
                <Typography className={classes.weekdayText} variant="subtitle1">{user.weekscores[1].Day}</Typography>
            </Box>
            <Box className={classes.middleWeekday}>
                <CircularProgress style={{color: thirdGaugeColor}} variant="determinate" value={100} size={80} thickness={1.5} />
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
                <Typography className={classes.weekdayText} variant="subtitle1">{user.weekscores[2].Day}</Typography>
            </Box>
            <Box className={classes.gaugeBox}>
                <CircularProgress style={{color: fourthGaugeColor}} variant="determinate" value={100} size={80} thickness={1.5} />
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
                <Typography className={classes.weekdayText} variant="subtitle1">{user.weekscores[3].Day}</Typography>
            </Box>
          </Box>
          <Box className={classes.weekdaysBox}>
            <Box className={classes.gaugeBox}>
                <CircularProgress style={{color: fifthGaugeColor}} variant="determinate" value={100} size={80} thickness={1.5} />
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
                <Typography className={classes.weekdayText} variant="subtitle1">{user.weekscores[4].Day}</Typography>
            </Box>
            <Box className={classes.middleWeekday}>
                <CircularProgress style={{color: sixthGaugeColor}} variant="determinate" value={100} size={80} thickness={1.5} />
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
                <Typography className={classes.weekdayText} variant="subtitle1">{user.weekscores[5].Day}</Typography>
            </Box>
            <Box className={classes.gaugeBox}>
                <CircularProgress style={{color: seventhGaugeColor}} variant="determinate" value={100} size={80} thickness={1.5} />
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
                <Typography className={classes.weekdayText} variant="subtitle1">{user.weekscores[6].Day}</Typography>
            </Box>
          </Box>
        </FadeIn>
    </div>
  )
}

export default WeekdayScores;

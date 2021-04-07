import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { UserDetail } from '../../Models';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import FadeIn from 'react-fade-in';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getGaugeColor } from '../../Helpers';

const useStyles = makeStyles<Theme, any>((theme) => ({
  page: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    textAlign: "center"
  },
  scoreOfText: {
    marginTop: 30
  },
  gauge: {
    color: "#66FCF1"
  },
  gaugeBox: {
    position: "relative",
    marginTop: 25
  },
  spinner: {
    marginTop: 80,
    alignItems: "center"
  }
}));

export interface UnhappiestProps {
    user : UserDetail
}

const Unhappiest: FC<UnhappiestProps> = ({ user }) => {
  const classes = useStyles({});

  const [progress, setProgress] = React.useState(0.0);
  const [fade, setFade] = React.useState(false);
  const [display, setDisplay] = React.useState("block");

  const gaugeColor = getGaugeColor(user.tweets.saddest.score, user.tweets.saddest.score, user.tweets.happiest.score);

  const onTweetLoaded = () => {
    setFade(true);
    setDisplay("none");
    setTimeout(function () {
      setProgress(user.tweets.saddest.score);
    }, 600);
  }

  return (
    <div className={classes.page}>
      <div className={classes.titleContainer}>
        <Typography className={classes.overallText} align="center" variant="h5" component="h5">
          Your unhappiest Tweet
          </Typography>
      </div>
      <div className={classes.spinner} style={{ display: display }}>
        <CircularProgress size={100} />
      </div>
      <FadeIn delay={200} visible={fade}>
        <div style={{ maxHeight: 370, overflow: "auto", marginTop: 10 }}>
          <TwitterTweetEmbed
            tweetId={user.tweets.saddest.id}
            options={{ cards: "hidden", align: "center", conversation: "none" }} onLoad={onTweetLoaded} />
        </div>
        <Typography className={classes.scoreOfText} align="center" variant="h5" component="h5">With a score of</Typography>
        <div>
          <Box className={classes.gaugeBox}>
            <CircularProgress style={{color: gaugeColor}} variant="determinate" value={progress * 10} size={90} thickness={4} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Typography variant="h5" component="div">{user.tweets.saddest.score}</Typography>
            </Box>
          </Box>
        </div>
      </FadeIn>
    </div>
  )
}

export default Unhappiest;
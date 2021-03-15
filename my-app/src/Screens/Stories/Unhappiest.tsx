import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { UserDetail } from '../../Models';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import FadeIn from 'react-fade-in';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles<Theme, any>((theme) => ({
    page: {
        padding: 30,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: theme.palette.background.default
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
    }
}));
    
export interface UnhappiestProps {
    user : UserDetail
    embed : TwitterTweetEmbed
}

const Unhappiest: FC<UnhappiestProps> = ({user}) => {
    const classes = useStyles({});

    const [progress, setProgress] = React.useState(0.0);
    const [loaded, setLoaded] = React.useState(false);
    const [show, setShow] = React.useState(false);

    const onTweetLoaded = () => {
      setLoaded(true);
    }

    const onFadeDone = () => {
      setTimeout(function() {
        setShow(true);
      }, 300);
      setTimeout(function() {
        setProgress(user.tweets.happiest.score);
      }, 500);
    }
    
    return (
      <div className={classes.page}>
        <div className={classes.titleContainer}>
          <Typography className={classes.overallText} align="center" variant="h5" component="h5">
            Your unhappiest Tweet
          </Typography>
        </div>
        <div style={{height: 370, overflow: "scroll"}}>
        <FadeIn visible={loaded} onComplete={onFadeDone}>
          <TwitterTweetEmbed tweetId={user.tweets.saddest.id} options={{cards: "hidden", align: "center", conversation: "none"}} onLoad={onTweetLoaded}/>
        </FadeIn>
        </div>
        <FadeIn visible={show}>
          <Typography className={classes.scoreOfText} align="center" variant="h5" component="h5">With a score of</Typography>
          <div>
            <Box className={classes.gaugeBox}>
              <CircularProgress className={classes.gauge} variant="determinate" value={progress * 10} size={90} thickness={4} />
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
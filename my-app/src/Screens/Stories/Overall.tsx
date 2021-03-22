import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UserDetail} from '../../Models';
import CelebrityScores from '../../Components/CelebrityScores';
import styled, { keyframes } from 'styled-components';
import FadeIn from 'react-fade-in';
import Overlay from '../../Components/Overlay';


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
      marginTop: 30
    },
    celebritiesText: {
      marginTop: 30
    },
    infoText: {
      marginTop: 20,
    },
    hidden :{
      hidden: "true"
    },
    value : {
      color: "#66FCF1"
    },
    abs1: {
      zIndex: 1,
      position: "relative",
    }
}));
    
export interface OverallProps {
  user : UserDetail,
}

const Overall: FC<OverallProps> = ({user}) => {
    const classes = useStyles({});
    const [progress, setProgress] = React.useState(0.0);
    const [fade, setFade] = React.useState(false);

    React.useEffect(() => {
        setProgress(user.overallscore);
        setTimeout(function () {
          setFade(true);
        }, 100);
    });

    return (
      <div className={classes.page}>
        <div>
          <Typography align="center" variant="h5" component="h5">
            Your overall happiness score
          </Typography>
          <Typography align="center" variant="subtitle1">
            on a scale from 1 to 9
          </Typography>
        </div>
        <div>
          <Box className={classes.gaugeBox}>
            <CircularProgress className={classes.gauge} variant="determinate" value={progress * 10} size={140} thickness={2.5} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Typography variant="h4" component="div">{user.overallscore}</Typography>
            </Box>
          </Box>
        </div>
        <FadeIn delay={600} visible={fade}>
        <div className={classes.abs1}>
          <Typography className={classes.celebritiesText} align="center" variant="h6">
            Celebrities with scores<br/>close to your own
          </Typography>
          <CelebrityScores user={user}/>
        </div>
        <div className={classes.infoText}>
          <Typography align="center" variant="subtitle1" component="h6">
              Based on <span className={classes.value}>{user.tweetsamount}</span> Tweets
          </Typography>
          <Typography align="center" variant="subtitle1" component="h6">
              Gathered between <span className={classes.value}>{user.tweetstart}</span> and today
          </Typography>
          <Typography align="center" variant="subtitle1" component="h6">
              Matching on <span className={classes.value}>{user.wordsmatched}</span> words
          </Typography>
        </div>
        </FadeIn>
      </div>
      )
}

export default Overall;
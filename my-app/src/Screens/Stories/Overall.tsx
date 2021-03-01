import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useLocation, useHistory } from "react-router-dom";
import { User, UserDetail} from '../../Models';
import CelebrityScores from '../../Components/CelebrityScores';

const useStyles = makeStyles<Theme, any>((theme) => ({
    page: {
        padding: 30,
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        backgroundColor: theme.palette.background.default
    },
    titleContainer: {
      marginTop: 30
    },
    gauge: {
      color: "#66FCF1"
    },
    gaugeBox: {
      position: "relative",
      marginTop: 53
    },
    infoText: {
      marginTop: 43
    }
}));
    
export interface OverallProps {
  user : UserDetail
}

const Overall: FC<OverallProps> = ({user}) => {
    const classes = useStyles({});
    const [progress, setProgress] = React.useState(0.0);

    React.useEffect(() => {
      setTimeout(function() {
        setProgress(5.6);
      }, 100);
    });
    
    return (
      <div className={classes.page}>
        <div className={classes.titleContainer}>
          <Typography className={classes.overallText} align="center" variant="h5" component="h5">
            Your overall happiness score
          </Typography>
          <Typography className={classes.overallSubtext} align="center" variant="subtitle1">
            on a scale from 1 to 9
          </Typography>
        </div>
        <div>
          <Box className={classes.gaugeBox}>
            <CircularProgress className={classes.gauge} variant="determinate" value={progress * 10} size={190} thickness={2.5} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Typography variant="h2" component="div">{user.overallscore}</Typography>
            </Box>
          </Box>
        </div>
        <div>
          <CelebrityScores user={user}/>
        </div>
        <div className={classes.infoText}>
          <Typography align="center" variant="h6" component="h6">
              Based on {user.tweetsamount} Tweets
          </Typography>
          <Typography align="center" variant="h6" component="h6">
              Gathered between {user.tweetstart} and today
          </Typography>
          <Typography align="center" variant="h6" component="h6">
              Matching on {user.wordsmatched} words
          </Typography>
        </div>
      </div>
      )
}

export default Overall;
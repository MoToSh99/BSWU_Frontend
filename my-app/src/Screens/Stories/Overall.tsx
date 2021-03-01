import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import { useLocation, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { User } from '../../Models';

const useStyles = makeStyles<Theme, any>((theme) => ({
    page: {
        padding: 30,
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        backgroundColor: theme.palette.background.default
    },
    avatar: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 46,
      width: 40,
      height: 40
    },
    titleContainer: {
      marginTop: 30
    },
    gauge: {
      color: "#66FCF1"
    }
}));
    
export interface OverallProps {
}

const Overall: FC<OverallProps> = (props) => {
    const classes = useStyles({});
    const history = useHistory();
    const location = useLocation();
    const userinfo : User = location.state.memberDetail
    
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
          <Box position="relative" display="inline-flex">
            <CircularProgress className={classes.gauge} variant="determinate" value={5.6 * 10} size={175} thickness={2.8} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Typography variant="h3" component="div">{`5.6`}</Typography>
            </Box>
          </Box>
        </div>
        <div className={classes.avatars}>
            <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV.jpg" className={classes.firstAvatar}/>
            <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV.jpg" className={classes.secondAvatar}/>
            <Avatar alt="Remy Sharp" src="https://pbs.twimg.com/profile_images/1329647526807543809/2SGvnHYV.jpg" className={classes.thirdAvatar}/>
        </div>
        <div className={classes.infoText}>
          <Typography align="center" variant="h6" component="h6">
              Based on 3200 Tweets
          </Typography>
          <Typography align="center" variant="h6" component="h6">
              Gathered between January 30th and today
          </Typography>
          <Typography align="center" variant="h6" component="h6">
              Matching on 9500 words
          </Typography>
        </div>
      </div>
      )
}

export default Overall;
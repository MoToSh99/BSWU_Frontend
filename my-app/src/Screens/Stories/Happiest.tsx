import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import { UserDetail } from '../../Models';
import { TwitterTweetEmbed } from 'react-twitter-embed';

const useStyles = makeStyles<Theme, any>((theme) => ({
    page: {
        padding: 30,
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        backgroundColor: theme.palette.background.default
    },
    titleContainer: {
      marginTop: 30
    },
}));
    
export interface HappiestProps {
    user : UserDetail
    embed : TwitterTweetEmbed
}

const Happiest: FC<HappiestProps> = ({user}) => {
    const classes = useStyles({});
    
    
    return (
      <div className={classes.page}>
        <div className={classes.titleContainer}>
          <Typography className={classes.overallText} align="center" variant="h5" component="h5">
            Your happiest Tweet
          </Typography>
        </div>
        <TwitterTweetEmbed tweetId={user.tweets.happiest.id}/>

      </div>
      )
}

export default Happiest;
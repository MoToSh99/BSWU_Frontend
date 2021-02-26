import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { useLocation, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { User } from '../Models';

const useStyles = makeStyles<Theme, any>((theme) => ({
    page: {
        padding: 15,
        display: "flex",
        flexDirection: "column",
        justifyItems: "center"
    },
    button: {
        width: "100%",
        borderRadius: 20,
        textTransform: "unset"
    },
    secondaryButton: {
      width: "100%",
      borderRadius: 20,
      textTransform: "unset",
      backgroundColor: "#C5C6C7"
    },
    avatar: {
      width: 40,
      height: 40
  }
}));
    
export interface ConfirmProps {
}

const Confirm: FC<ConfirmProps> = (props) => {
    const classes = useStyles({});
    const history = useHistory();
    const location = useLocation();
    const userinfo : User = location.state.memberDetail

  return (
    <div className={classes.page}>
      <div className={classes.titleContainer}>
        <Typography align="center" variant="h5" component="h5">
          Is this the right user?
        </Typography>
      </div>
      <Avatar alt="Remy Sharp" src={userinfo.profile_image_url} className={classes.avatar}/>
      <div className={classes.infoText}>
        <Typography align="center" variant="h6" component="h6">
            {userinfo.name}
        </Typography>
        <Typography align="center" variant="h6" component="h6">
            @{userinfo.username}
        </Typography>
        <Typography align="center" variant="h6" component="h6">
            {userinfo.location}
        </Typography>
        <Typography align="center" variant="h6" component="h6">
            {userinfo.followers_count} followers
        </Typography>
      </div>
      <div className={classes.inputContainer}>
        <Button
            className={classes.button}
            variant="contained"
            onClick={() => {
              history.push({pathname: "/loading",
                state: { memberDetail: userinfo}
              })
            }}
            color="primary"
            size="large">
              Yes
        </Button>
        <Button
            className={classes.secondaryButton}
            variant="contained"
            onClick={() => {
              history.push({
                pathname: "/"
              })
            }}
            color="secondary"
            size="large">
              No, let me try again
        </Button>
      </div>
    </div>
    )
}


export default Confirm;
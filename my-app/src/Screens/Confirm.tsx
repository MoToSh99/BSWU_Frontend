import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useLocation, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { User } from '../Models';
import MainButton from '../Components/MainButton';

const useStyles = makeStyles<Theme, any>((theme) => ({
    page: {
        padding: 30,
        display: "flex",
        flexDirection: "column",
        justifyItems: "center"
    },
    avatar: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 46,
      width: 140,
      height: 140
    },
    infoText: {
      marginTop: 33
    },
    titleContainer: {
      marginTop: 30
    },
    inputContainer: {
      marginTop: 90,
    }
    
}));
    
export interface ConfirmProps {
}

const Confirm: FC<ConfirmProps> = (props) => {
    const classes = useStyles({});
    const history = useHistory();
    const location = useLocation();
    const userinfo : User = location.state.memberDetail

    const input = document.getElementById("yesButton");
    document.addEventListener("keyup", function(event) {
      if (event.keyCode === 13) {
        event.preventDefault();
        input?.click();
      }
    });
    
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
          <MainButton
            color="primary"
            text="Yes"
            onClick={() => {
              history.push({pathname: "/loading",
                state: { memberDetail: userinfo}
              })
            }}
          />
          <MainButton
            color="secondary"
            text="No, let me try again"
            onClick={() => {
              history.push({
                pathname: "/"
              })
            }}
          />
        </div>
      </div>
      )
}

export default Confirm;
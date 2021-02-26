import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';
import { useLocation, useHistory } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';
import { User } from '../Models';

const useStyles = makeStyles<Theme, any>((theme) => ({
    page: {
        padding: 30,
        display: "flex",
        flexDirection: "column",
        justifyItems: "center"
    },
    button: {
        width: "100%",
        height: "30%",
        marginTop: 93,
        borderRadius: 30,
        textTransform: "unset",
        fontWeight: "bold"
    },
    secondaryButton: {
      width: "100%",
      height: "30%",
      marginTop: 15,
      borderRadius: 30,
      textTransform: "unset",
      backgroundColor: "#C5C6C7",
      fontWeight: "bold",
      color: "white"
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
          <Button
              id="yesButton"
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
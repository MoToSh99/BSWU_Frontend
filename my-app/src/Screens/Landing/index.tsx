import React, { FC, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, TextField, Button, InputAdornment } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import './index.css';
import MainButton from '../../Components/MainButton';

const useStyles = makeStyles<Theme, any>((theme) => ({
  textField: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',            
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
      background: "white",
      borderRadius: 15
  },
  page: {
    height: "100%",
    padding: 30,
    paddingBottom: 70,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  text: {
    marginBottom: 100,
  },
  errorTextHidden: {
    color: "red",
    textAlign: "center",
    marginBottom: 90,
    visibility: "hidden"
  },
  errorText: {
    color: "red",
    textAlign: "center",
    marginBottom: 90,
    visibility: "visible"
  },
  footerContainer: {
    marginTop: "120px"
  }
}));

export interface LandingScreenProps {

}

const LandingScreen: FC<LandingScreenProps> = (props) => {
    const classes = useStyles({});
    const history = useHistory();
    
    const getUserinfo = (usr: string) => {
        fetch(`https://datascripttwitter.herokuapp.com/userinfo?username=${usr}`)
          .then(res => res.json())
          .then(
            (result) => {
              history.push({pathname: "/confirm",
                state: { memberDetail: result}})
            },
            (error) => {
              console.log(error)
              setError(true)
            }
          )
    }

    const [username, setUsername] = useState("")
    const [error, setError] = useState(false)
    
    return (
          <div className={classes.page}>
            <div className={classes.titleContainer}>
              <Typography align="center" variant="h2" component="h2">
                Happy<br/> 
                Tweet
              </Typography>
            </div>
            <div className={classes.inputContainer}>
              <Typography className={classes.text} align="center" variant="subtitle1" component="h2">
                  Enter your Twitter username:
              </Typography>
              <TextField
                  error={error}
                  className={classes.textField}
                  id="filled-basic"
                  label="Twitter Username"
                  variant="filled"
                  onChange={(e) => {
                    setUsername(e.target.value)
                    setError(false)
                  }}
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <TwitterIcon />
                      </InputAdornment>
                  ),
                }}
                />
              {error ? (<Typography className={classes.errorText} variant="subtitle1">Error: User not found.</Typography>) : (<Typography className={classes.errorTextHidden} variant="subtitle1">Error: User not found.</Typography>)}
              <MainButton
                color="primary"
                bold={true}
                text="Start your journey"
                onClick={() => { 
                  getUserinfo(username) 
                }}
              />
            </div>
            <div className={classes.footerContainer}>
              <Typography className={classes.madeByText} align="center" variant="subtitle1" component="h2">
                  Made with ❤️ by DTM
              </Typography>
            </div>
        </div>
    )
}



export default LandingScreen;
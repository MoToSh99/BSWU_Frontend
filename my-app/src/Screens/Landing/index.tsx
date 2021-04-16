import React, { FC, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, TextField, Button, InputAdornment } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import './index.css';
import MainButton from '../../Components/MainButton';
import { ReactComponent as Logo } from '../../Images/logo.svg';

const useStyles = makeStyles<Theme, any>((theme) => ({
  page: {
    height: "100%",
    padding: 30,
    display: "flex",
    flexDirection: "column"
  },
  subtext: {
    marginTop: 145
  },
  textField: {
    width: '100%',     
    fontWeight: 500,
    background: "white",
    borderRadius: 15,
    marginTop: 20,
    maxWidth: 750
  },
  errorTextHidden: {
    color: "red",
    textAlign: "center",
    visibility: "hidden"
  },
  errorText: {
    color: "red",
    textAlign: "center",
    visibility: "visible"
  },
  button: {
    marginTop: 5,
  },
  footerContainer: {
    width: "100%",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  logo: {
    maxWidth: 750,
  }
}));

export interface LandingScreenProps {

}

const LandingScreen: FC<LandingScreenProps> = (props) => {
    const classes = useStyles({});
    const history = useHistory();
    
    const getUserinfo = (usr: string) => {
        fetch(`https://sharifhome.duckdns.org//userinfo?username=${usr}`)
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
            <div className={classes.logoContainer}>
              <Logo className={classes.logo}></Logo>
            </div>
          
            <div className={classes.inputContainer}>
              <Typography className={classes.subtext} align="center" variant="subtitle1" component="h2">
                  Enter your Twitter username:
              </Typography>
              <TextField
                  error={error}
                  className={classes.textField}
                  id="filled-basic"
                  color="secondary"
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
              <div className={classes.button}>
                <MainButton
                  color="primary"
                  text="Start your journey ➤"
                  onClick={() => { 
                    getUserinfo(username) 
                  }}
                />
              </div>
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
import React, { FC, useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, TextField, Button, InputAdornment } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import './index.css';

const useStyles = makeStyles<Theme, any>((theme) => ({
  textField: {
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',            
      paddingBottom: 0,
      marginTop: 0,
      fontWeight: 500,
      background: "white",
      borderRadius: 15,
      marginBottom: 100,
  },
  page: {
    height: "100vh",
    padding: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  inputContainer: {
    
  },
  button: {
      width: "100%",
      borderRadius: 40,
      textTransform: "unset",
      height: 65
  },
  text: {
    marginBottom: 15,
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
            }
          )
    }

    const [username, setUsername] = useState("")
    
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
                  className={classes.textField}
                  id="filled-basic"
                  label="Twitter Username"
                  variant="filled"
                  onChange={(e) => {setUsername(e.target.value)}}
                  InputProps={{
                    disableUnderline: true,
                    endAdornment: (
                      <InputAdornment position="end">
                        <TwitterIcon />
                      </InputAdornment>
                  ),
                }}
                />
    
  
              <Button
                  className={classes.button}
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => { getUserinfo(username) }}
                  >
                    Start your journey
              </Button>

            </div>
            <div className={classes.footerContainer}>
              <Typography align="center" variant="subtitle1" component="h2">
                  Made with ❤️ by DTM
              </Typography>
            </div>
        </div>
    )
}



export default LandingScreen;
import React, { FC, useState } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, TextField, InputAdornment, Slider, CircularProgress } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import './index.css';
import MainButton from '../../Components/MainButton';
import logo from "../../Images/logopng.png";

const useStyles = makeStyles<Theme, any>((theme) => ({
  page: {
    height: "100%",
    padding: 30,
    display: "flex",
    flexDirection: "column",
  },
  subtext: {
    marginTop: 110
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
    maxWidth: "80%",
  },
  slider: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 50,
    width: "100%",
    maxWidth: 650,
    textAlign: "center"
  },
  value : {
    color: "#66FCF1"
  },
  loadingSpinner: {
    marginBottom: 30
  }
}));

const LandingScreen: FC = () => {
    const classes = useStyles({});
    const history = useHistory();

    const [username, setUsername] = useState("")
    const [error, setError] = useState(false)
    const [sliderValue, setSliderValue] = useState(3200)
    const [loading, setLoading] = useState(false)
    
    const getUserinfo = (usr: string) => {
        setLoading(true)
        fetch(`https://sharifhome.duckdns.org/userinfo?username=${usr}`)
          .then(res => res.json())
          .then(
            (result) => {
              setLoading(false)
              history.push({
                pathname: "/confirm",
                state: { memberDetail: result, slider: sliderValue}
              })
            },
            (error) => {
              setLoading(false)
              console.log(error)
              setError(true)
            }
          )
    }

    const handleSliderChange = (event, newValue : number) => {
      setSliderValue(newValue);
    };
    
    return (
          <div className={classes.page}>
            <div className={classes.logoContainer}>
              <img alt="HappyTweet logo" className={classes.logo}  src={logo}/>
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
                  label="Example: billgates"
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
                {loading ? (<CircularProgress className={classes.loadingSpinner} size={30}/>) : (
                <MainButton
                  color="primary"
                  text="Start your journey ➤"
                  bold={false}
                  onClick={() => { 
                    getUserinfo(username) 
                  }}
                />)}
              </div>
              <div className={classes.slider}>
                <Typography align="center" variant="subtitle1">Number of Tweets to load: <span className={classes.value}>{sliderValue}</span></Typography>
                <Slider
                  defaultValue={3200}
                  aria-labelledby="discrete-slider"
                  step={600}
                  marks
                  min={200}
                  max={3200}
                  onChange={handleSliderChange}
                />
                <Typography align="center" variant="subtitle2">Adjust the slider to load fewer Tweets.</Typography>
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
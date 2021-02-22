import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import {Container, Toolbar, Typography, TextField, Button, InputAdornment } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import './index.css';

export interface LandingScreenProps {

}

const LandingScreen: FC<LandingScreenProps> = (props) => {
    const classes = useStyles({});

    return (

          <div className={classes.page}>
            <Typography align="center" variant="h2" component="h2">
              Happy<br/> 
              Tweet
            </Typography>
            <Typography align="center" variant="subtitle1" component="h2">
                Enter your Twitter username:
            </Typography>
            
        
            <TextField
                className={classes.textField}
                id="filled-basic"
                label="Twitter Username"
                variant="filled"
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
                size="large">
                  Start your journey
            </Button>
            
           
            <Typography align="center" variant="subtitle1" component="h2">
                Made with ❤️ by DTM
            </Typography>
        </div>
    )
}

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
        marginBottom: 10,
    },
    page: {
      padding: 15,
      display: "flex",
      flexDirection: "column",
      justifyItems: "center"
    },
    button: {
        borderRadius: 20,
        textTransform: "unset"
    }
}));

export default LandingScreen;
import React, { FC, useEffect } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core';
import { useLocation, useHistory } from "react-router-dom";
import { User } from '../Models';
import logo from '../Images/loading.gif'

const useStyles = makeStyles<Theme, any>((theme) => ({
    page: {
        padding: 15,
        display: "flex",
        flexDirection: "column",
        justifyItems: "center"
    },
    loadingAnimation: {
        width: 100,
    },
}));
    
export interface LoadingProps {
}


const Loading: FC<LoadingProps> = (props) => {
    const classes = useStyles({});
    const history = useHistory();
    const location = useLocation();
    const userinfo : User = location.state.memberDetail
 
    const getUserinfo = (usr: string) => {
        fetch(`https://datascripttwitter.herokuapp.com/getdata?username=${usr}&count=500`)
          .then(res => res.json())
          .then(
            (result) => {
              history.push({pathname: "/loading",
                state: { memberDetail: result}})
                console.log(result)
            },
            (error) => {
              console.log(error)
            }
          )
    }

    useEffect(() => { 
        getUserinfo(userinfo.username);
    });
    
    return (
          <div className={classes.page}>
            <div className={classes.titleContainer}>
              <Typography align="center" variant="h5" component="h5">
                Getting things ready...
              </Typography>
            </div>
            <div className={classes.funFacts}>
                <Paper>Fun fact: you kinda suck.</Paper>
            </div>
            <div className={classes.loadingAnimation}>
            <img src={logo} alt="loading..." />
            </div>
        </div>
    )
}

export default Loading;
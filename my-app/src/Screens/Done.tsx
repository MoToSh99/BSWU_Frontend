import React, { FC } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FinishCard from '../Components/FinishCard';
import { UserDetail } from '../Models';
import MainButton from '../Components/MainButton';

const useStyles = makeStyles<Theme, any>((theme) => ({
  titleContainer: {
      width: '100%',
      fontWeight: 500,
      padding: 40
  },
  page: {
    height: "100vh",
    padding: 30,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  buttonContainer: {
    marginTop: 15
  }
}));

export interface DoneScreenProps {
  user : UserDetail
}

const Done: FC<DoneScreenProps> = ({user}) => {
    const classes = useStyles({});
    const history = useHistory();
    
    return (
          <div className={classes.page}>
            <div className={classes.titleContainer}>
              <Typography align="center" variant="h5" component="h5">
                All done!
              </Typography>
              <Typography align="center" variant="h5" component="h5">
                Share your score on social media
              </Typography>
            </div>
            <FinishCard user={user}></FinishCard>
            <div className={classes.buttonContainer}>
              <MainButton color="primary" text="Share" onClick={()=>{console.log("share")}}/>
              <MainButton color="secondary" text="Try another username" onClick={() => history.push("/")}/>
            </div>
        </div>
    )
}



export default Done;
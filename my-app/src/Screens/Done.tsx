import React, { FC } from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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
  text: {
    marginBottom: 15,
  }
}));

export interface DoneScreenProps {

}

const Done: FC<DoneScreenProps> = (props) => {
    const classes = useStyles({});
    
    
    return (
          <div className={classes.page}>
            <div className={classes.titleContainer}>
              <Typography align="center" variant="h2" component="h2">
                Done<br/>
              </Typography>
            </div>
        </div>
    )
}



export default Done;
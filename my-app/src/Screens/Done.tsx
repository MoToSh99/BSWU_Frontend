import React, { FC, useRef } from 'react';
import { useHistory, useLocation} from "react-router-dom";
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FinishCard from '../Components/FinishCard';
import { UserDetail } from '../Models';
import MainButton from '../Components/MainButton';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import html2canvas from 'html2canvas';

const useStyles = makeStyles<Theme, any>((theme) => ({
  titleContainer: {
      width: '100%',
      fontWeight: 500
  },
  page: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  shareCard: {
    marginTop: 50
  },
  buttonContainer: {
    zIndex: 1,
    position: "relative",
    marginTop: 50
  }
}));

export interface DoneScreenProps {
  user : UserDetail
}

const Done: FC<DoneScreenProps> = ({user}) => {
    const classes = useStyles({});
    const history = useHistory();
    const componentRef = useRef();

    const ComponentToPrint = React.forwardRef((props, ref) => (
      <div ref={ref}><FinishCard user={user}></FinishCard></div>
    ));

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
            <div className={classes.shareCard}>
              <ComponentToPrint ref={componentRef}/>
            </div>
            <div className={classes.buttonContainer}>
              <MainButton onClick={() => exportComponentAsPNG(componentRef, {fileName: "HappyTweet"})} color="primary" bold={true} text="Share"/>
              <MainButton color="secondary" bold={false} text="Try another username" onClick={() => history.push("/")}/>
            </div>
        </div>
    )
}

export default Done;
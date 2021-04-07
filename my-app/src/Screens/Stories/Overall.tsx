import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box, Modal, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UserDetail} from '../../Models';
import CelebrityScores from '../../Components/CelebrityScores';
import styled, { keyframes } from 'styled-components';
import FadeIn from 'react-fade-in';
import Overlay from '../../Components/Overlay';
import Tada from 'react-reveal/Tada';
import { getGaugeColor } from '../../Helpers';
import ModalCeleb from '../../Components/ModalCeleb';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';


const useStyles = makeStyles<Theme, any>((theme) => ({
    page: {
        padding: 30,
        display: "flex",
        flexDirection: "column",
        textAlign: "center"
    },
    gaugeBox: {
      position: "relative",
      marginTop: 30
    },
    celebritiesText: {
      marginTop: 30
    },
    infoText: {
      marginTop: 20,
    },
    hidden :{
      hidden: "true"
    },
    value : {
      color: "#66FCF1"
    },
    abs1: {
      zIndex: 1,
      position: "relative",
    },
    arrowContainer: {
      display: "flex",
      width: "100%",
      justifyContent: "space-between",
      alignItems: "center",
      height: 100
    },
    dialog:{
    "& .MuiDialog-paper" : {
      opacity: 0.9,
      color: "red",
    }
  }
}));
    
export interface OverallProps {
  user : UserDetail,
}

const Overall: FC<OverallProps> = ({user}) => {
    const classes = useStyles({});
    const [progress, setProgress] = React.useState(0.0);
    const [fade, setFade] = React.useState(false);
    const [navigateHelp, setShowNavigateHelp] = React.useState(true);

    const gaugeColor = getGaugeColor(user.overallscore, user.tweets.saddest.score, user.tweets.happiest.score);

    React.useEffect(() => {
        setProgress(user.overallscore);
        setTimeout(function () {
          setFade(true);
        }, 100);
    });

    return (
      <div className={classes.page}>
        <div>
          <Typography align="center" variant="h5" component="h5">
            Your overall happiness score
          </Typography>
          <Typography align="center" variant="subtitle1">
            on a scale from 1 to 9
          </Typography>
        </div>
        <div>
          <Box className={classes.gaugeBox}>
            <CircularProgress style={{color: gaugeColor}} variant="determinate" value={progress * 10} size={140} thickness={2.5} />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Tada>
                <Typography variant="h4" component="div">{user.overallscore}</Typography>
              </Tada>
            </Box>
          </Box>
        </div>
        <FadeIn delay={600} visible={fade}>
          <Typography className={classes.celebritiesText} align="center" variant="h6">
            Celebrities with scores<br/>close to your own
          </Typography>

        <div className={classes.abs1}>
          <CelebrityScores user={user}/>
          <ModalCeleb user={user}/>
        </div>


        <div className={classes.infoText}>
          <Typography align="center" variant="subtitle1" component="h6">
              Based on <span className={classes.value}>{user.tweetsamount}</span> Tweets
          </Typography>
          <Typography align="center" variant="subtitle1" component="h6">
              Gathered between <span className={classes.value}>{user.tweetstart}</span> and today
          </Typography>
          <Typography align="center" variant="subtitle1" component="h6">
              Matching on <span className={classes.value}>{user.wordsmatched}</span> words
          </Typography>
        </div>
        </FadeIn>
        <Dialog className={classes.dialog} open={navigateHelp} onClose={() => {setShowNavigateHelp(false)}}>
          <DialogContent className={classes.dialog}>
            <DialogContentText>
              Navigate the site by clicking on the left or right side of the screen
            </DialogContentText>
            <div className={classes.arrowContainer}>
              <div style={{padding: 20}}>
              <ArrowBackIcon fontSize="large"/>
              </div>
              <div style={{padding: 20}}>
              <ArrowForwardIcon fontSize="large"/>
              </div>
            </div>
            <DialogActions>
              <Button onClick={() => {setShowNavigateHelp(false)}}>Close</Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
      )
}

export default Overall;
import React, { FC, useRef } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { makeStyles, Theme } from "@material-ui/core/styles";
import {
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";
import FinishCard from "../Components/FinishCard";
import { UserDetail } from "../Models";
import MainButton from "../Components/MainButton";
import {
  exportComponentAsJPEG,
  exportComponentAsPDF,
  exportComponentAsPNG,
} from "react-component-export-image";
import html2canvas from "html2canvas";
import ReactStars from "react-rating-stars-component";
import { TwitterShareButton} from "react-share";
import { TwitterIcon} from "react-share";

const useStyles = makeStyles<Theme, any>((theme) => ({
  titleContainer: {
    width: "100%",
    fontWeight: 500,
  },
  page: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  shareCard: {
    marginTop: 50,
  },
  buttonContainer: {
    zIndex: 1,
    position: "relative",
    marginTop: 50,
  },
  rating: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  dialog: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
		width: "100%",
		height: 50,
		borderRadius: 40,
		textTransform: "unset",
		fontWeight: "bold",
		marginBottom: 15
	},
}));

export interface DoneScreenProps {
  user: UserDetail;
}

const Done: FC<DoneScreenProps> = ({ user }) => {
  const classes = useStyles({});
  const history = useHistory();
  const componentRef = useRef();
  const [rating, setShowrating] = React.useState(true);
  const [error, setError] = React.useState(false);

  const ComponentToPrint = React.forwardRef((props, ref) => (
    <div ref={ref}>
      <FinishCard user={user}></FinishCard>
    </div>
  ));

  const ratingChanged = (newRating) => {
    console.log(newRating);
    setShowrating(false);
    sendRating(newRating);
  };

  const sendRating = (newRating) => {
    fetch(`https://sharifhome.duckdns.org/rating?rating=${newRating}&username=${user.userinfo.username}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
        },
        (error) => {
          console.log(error)
          setError(true)
        }
      )
}

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
        <ComponentToPrint ref={componentRef} />
      </div>
      <div className={classes.buttonContainer}>
        
        <TwitterShareButton
        url={"http://happytweet.toheed.dk/"}
        title={"HappyTweet"}
        hashtags={["hello", "it"]}
        className={classes.button}>
        <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<TwitterIcon size={32} round={true}> </TwitterIcon>}
      >
        Share on Twitter
      </Button>
      </TwitterShareButton>
        <MainButton
          color="secondary"
          bold={false}
          text="Try another username"
          onClick={() => history.push("/")}
        />
      </div>

      <Dialog
        className={classes.dialog}
        disableBackdropClick={true}
        open={rating}
        onClose={() => {
          setShowrating(false);
        }}
      >
        <DialogContent className={classes.dialog}>
          <DialogContentText>
          How likely are you to recommend this app?
          </DialogContentText>

          <ReactStars
            count={5}
            onChange={ratingChanged}
            size={44}
            activeColor="#ffd700"
            className={classes.rating}
          />


          <DialogActions>
            <Button
              onClick={() => {
                setShowrating(false);
              }}
            >
              Skip
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Done;

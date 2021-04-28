//InstallPWA.js
import React, { useEffect } from "react";

import Modal from "@material-ui/core/Modal";
import { makeStyles, Theme, createStyles, withTheme } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import image from "../Images/logopng.png";
import share from "../Images/AppleShare.png";
import {Box} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white"
    },
    box: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
  })
);

export const InstallPWA = ({...props}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    useEffect(() => {
        handleOpen()
      }, []);

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        open
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
          <Box className={classes.box}>
            <div className="uk-container uk-container-small uk-flex uk-flex-middle uk-flex-center uk-height-1-1">
                <div style={{maxWidth: "400px"}} className="uk-card uk-card-default uk-card-body">
                    <div style={{marginTop: "-50px"}} className="uk-text-center">
                        <img
                            src={image}
                            className="uk-border-rounded"
                            height="72"
                            width="72"
                            alt="Install PWA"
                            />
                    </div>
                    <div className="uk-margin-top uk-text-center">
                        <h3>Install Bevyho!</h3>
                    </div>
                    <p className="uk-h4 uk-text-muted uk-text-center uk-margin-remove-top">Install this application on your homescreen for a better experience.</p>
                    <div className="uk-text-center">
                        <p className="uk-text-small">
                        Tap
                        <img
                            src={share}
                            style={{margin: "auto 4px 8px"}}
                            className="uk-display-inline-block"
                            alt="Add to homescreen"
                            height="20"
                            width="20"
                            />
                        then &quot;Add to Home Screen&quot;
                        </p>
                    </div>
                    <button className="uk-button button-minimal" onClick={() => handleClose()}>Close</button>
                </div>
            </div>
            </Box>
        </Modal>
    )
}
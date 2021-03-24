import React, { FC } from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { UserDetail } from "../Models";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    paper: {
      display: "flex",
      alignItems: "right",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "20px",
      maxHeight: window.innerHeight / 2,
      overflow: "auto",
      width: window.innerWidth - 100,
    },
    button: {
      background: "none",
      border: "none",
      margin: 0,
      padding: 0,
      cursor: "pointer",
      color: "white",
    },
    root: {
      width: "100%",
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: "inline",
    },
    header: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  })
);

export type ModalCelebProps = {
  user: UserDetail;
};

const ModalCeleb: FC<ModalCelebProps> = ({ user }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const celebs = [];

  user.allcelebrities.map(function(celeb) {
    celebs.push(
      <>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={celeb.pic} />
          </ListItemAvatar>
          <ListItemText
            primary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body1"
                  className={classes.inline}
                  color="textPrimary"
                >
                  @{celeb.username}
                </Typography>
                {""}
              </React.Fragment>
            }
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={classes.inline}
                  color="textPrimary"
                >
                {celeb.score}
                </Typography>
                {""}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
    );
  });

  return (
    <div>
      <button className={classes.button} type="button" onClick={handleOpen}>
        See other celebrity scores
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <List className={classes.root}>
              <Typography
                component="span"
                variant="h6"
                className={classes.header}
                color="textPrimary"
              >
                Celebrities
              </Typography>
              {celebs}
            </List>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default ModalCeleb;

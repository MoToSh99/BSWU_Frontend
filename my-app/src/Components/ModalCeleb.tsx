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
      background: "#45425a",
      border: "none",
      marginTop: 5,
      padding: 10,
      cursor: "pointer",
      color: "white",
      borderRadius: 60
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

  var celebs = [];

  celebs = user.allcelebrities.map((a) => 
        <ListItem key={a.username} alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src={a.pic} />
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
                  @{a.username}
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
                  {a.score}
                </Typography>
                {""}
              </React.Fragment>
            }
          />
        </ListItem>
  );


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

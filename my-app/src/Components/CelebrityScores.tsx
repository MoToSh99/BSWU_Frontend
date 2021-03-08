import { Box, Avatar, Typography, makeStyles, Theme, Tooltip } from "@material-ui/core"
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import React, { FC } from "react"
import {UserDetail} from '../Models';

const useStyles = makeStyles<Theme, any>((theme) => ({
    avatarsBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 14
      },
      avatar: {
        height: 75,
        width: 75,
        boxShadow: "0 0 0 1px #000"
      },
      middleAvatar: {
        height: 75,
        width: 75,
        marginLeft: 17,
        marginRight: 17,
        boxShadow: "0 0 0 1px #000"
      },
      scores: {
        marginTop: 16
      }
}));

export type CelebrityScoresProps = {
    user : UserDetail
}

const CelebrityScores: FC<CelebrityScoresProps> = ({user}) => {
  const classes = useStyles({})

  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  
  const handleTooltipClose = (value:number) => {
    switch (value) {
      case 1: setOpen1(false); break;
      case 2: setOpen2(false); break;
      case 3: setOpen3(false); break;
    }
  };
  const handleTooltipOpen = (value:number) => {
    switch (value) {
      case 1: setOpen1(true); break;
      case 2: setOpen2(true); break;
      case 3: setOpen3(true); break;
    }
  };

	return (
		<Box className={classes.avatarsBox}>
            <Box>
              <ClickAwayListener onClickAway={() => handleTooltipClose(1)}>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={() => handleTooltipClose(1)}
                open={open1}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={"@" + user.celebrityscore[0].username} 
                arrow>
                  <Avatar onClick={() => handleTooltipOpen(1)} alt="Remy Sharp" src={user.celebrityscore[0].pic} className={classes.avatar}/>
                </Tooltip>
              </ClickAwayListener>
              <Typography variant="subtitle1" className={classes.scores}>{user.celebrityscore[0].score}</Typography>
            </Box>
            <Box>
            <ClickAwayListener onClickAway={() => handleTooltipClose(2)}>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={() => handleTooltipClose(2)}
                open={open2}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={"@" + user.celebrityscore[1].username} 
                arrow>
                  <Avatar onClick={() => handleTooltipOpen(2)} alt="Remy Sharp" src={user.celebrityscore[1].pic} className={classes.middleAvatar}/>
                </Tooltip>
              </ClickAwayListener>
              <Typography variant="subtitle1" className={classes.scores}>{user.celebrityscore[1].score}</Typography>
            </Box>
            <Box>
            <ClickAwayListener onClickAway={() => handleTooltipClose(3)}>
              <Tooltip
                PopperProps={{
                  disablePortal: true,
                }}
                onClose={() => handleTooltipClose(3)}
                open={open3}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title={"@" + user.celebrityscore[2].username} 
                arrow>
                  <Avatar onClick={() => handleTooltipOpen(3)} alt="Remy Sharp" src={user.celebrityscore[2].pic} className={classes.avatar}/>
                </Tooltip>
              </ClickAwayListener>
              <Typography variant="subtitle1" className={classes.scores}>{user.celebrityscore[2].score}</Typography>
            </Box>
          </Box>
	)
}

export default CelebrityScores
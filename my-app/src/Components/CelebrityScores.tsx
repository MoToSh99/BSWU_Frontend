import { Box, Avatar, Typography, makeStyles, Theme, Tooltip } from "@material-ui/core"
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
	return (
		<Box className={classes.avatarsBox}>
            <Box>
                <Tooltip title={user.celebrityscore[0].username} arrow>
                  <Avatar data-tip="Hello" alt="Remy Sharp" src={user.celebrityscore[0].pic } className={classes.avatar}/>
                </Tooltip>
                <Typography variant="subtitle1" className={classes.scores}>{user.celebrityscore[0].score}</Typography>
            </Box>
            <Box>
                <Tooltip title={user.celebrityscore[1].username} arrow>
                  <Avatar alt="Remy Sharp" src={user.celebrityscore[1].pic} className={classes.middleAvatar}/>
                </Tooltip>
                <Typography variant="subtitle1" className={classes.scores}>{user.celebrityscore[1].score}</Typography>
            </Box>
            <Box>
                <Tooltip title={user.celebrityscore[2].username} arrow>
                  <Avatar alt="Remy Sharp" src={user.celebrityscore[2].pic} className={classes.avatar}/>
                </Tooltip>
                <Typography variant="subtitle1" className={classes.scores}>{user.celebrityscore[2].score}</Typography>
            </Box>
          </Box>
	)
}

export default CelebrityScores
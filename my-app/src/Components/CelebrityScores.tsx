import { Box, Avatar, Typography, makeStyles, Theme } from "@material-ui/core"
import React, { FC } from "react"

const useStyles = makeStyles<Theme, any>((theme) => ({
    avatarsBox: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 63
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
      usernames: {
        marginTop: 16
      }
}));

export type CelebrityScoresProps = {
    firstUrl: string,
    firstUser: string,
    firstScore: number,
    
    secondUrl: string,
    secondUser: string,
    secondScore: number,
    
    thirdUrl: string,
    thirdUser: string,
    thirdScore: number;
}

const CelebrityScores: FC<CelebrityScoresProps> = (props
) => {
	const classes = useStyles({})
	return (
		<Box className={classes.avatarsBox}>
            <Box>
                <Avatar alt="Remy Sharp" src={props.firstUrl} className={classes.avatar}/>
                <Typography className={classes.usernames} variant="subtitle1">{props.firstUser}</Typography>
                <Typography variant="subtitle1">{props.firstScore}</Typography>
            </Box>
            <Box>
                <Avatar alt="Remy Sharp" src={props.secondUrl} className={classes.middleAvatar}/>
                <Typography className={classes.usernames} variant="subtitle1">{props.secondUser}</Typography>
                <Typography variant="subtitle1">{props.secondScore}</Typography>
            </Box>
            <Box>
                <Avatar alt="Remy Sharp" src={props.thirdUrl} className={classes.avatar}/>
                <Typography className={classes.usernames} variant="subtitle1">{props.thirdUser}</Typography>
                <Typography variant="subtitle1">{props.thirdScore}</Typography>
            </Box>
          </Box>
	)
}

export default CelebrityScores
import { Avatar, Box, CircularProgress, makeStyles, Paper, Theme, Typography } from '@material-ui/core'
import React, { FC } from 'react'
import { UserDetail } from '../Models'

const useStyles = makeStyles<Theme, any>((theme) => ({
	paper: {
		borderRadius: 20
	},
	top: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		padding: 15,
	},
	bottom: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	gauge: {
		color: "#66FCF1"
	},
	gaugeBox: {
		position: "relative",
	},
	avatar: {
		width: 90,
		height: 90
	},
	logo: {
		marginTop: 10
	}

}));

export type FinishCardProps = {
	user: UserDetail
}

const FinishCard: FC<FinishCardProps> = ({ user }) => {
	const classes = useStyles({})
	return (
		<Paper className={classes.paper}>
			<div className={classes.top}>
				<div className={classes.avatarContainer}>
					<Avatar alt="Remy Sharp" src={user.userinfo.profile_image_url} className={classes.avatar}/>
					<Typography className={classes.usernames} variant="subtitle1">@{user.userinfo.username}</Typography>
				</div>
				<Box className={classes.gaugeBox}>
            
			<Box><CircularProgress className={classes.gauge} variant="determinate" value={58} size={100} thickness={2.5} /></Box>
            <Box
              top={0}
              left={0}
              bottom={10}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center">
              <Typography variant="h6" component="div">{user.overallscore}</Typography>
          	</Box>
					</Box>
			</div>
			<div className={classes.bottom}>
				<Typography>Happiest word: {user.topfivewords.top[0]}</Typography>
				<Typography>Unhappiest word: {user.topfivewords.bottom[0]}</Typography>
				<Typography className={classes.logo} variant="subtitle1">HappyTweet</Typography>
			</div>
		</Paper>
	)
}

export default FinishCard
import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import { UserDetail } from '../../Models';
import CelebrityScores from '../../Components/CelebrityScores';

const useStyles = makeStyles<Theme, any>((theme) => ({
	page: {
		padding: 30,
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
		backgroundColor: theme.palette.background.default
	},
	gauge: {
		color: "#66FCF1"
	},
	gaugeBox: {
		position: "relative",
		marginTop: 53
	},
	celebritiesText: {
		marginTop: 41
	},
	infoText: {
		marginTop: 25
	},
	hidden: {
		hidden: "true"
	},
	gaugesContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center"
	},
	blueText: {
		color: "#66FCF1",
		fontSize: 36,
		marginTop: 5,
		marginBottom: 5,

	}
}));

export interface CompareProps {
	user: UserDetail
}

const Compare: FC<CompareProps> = ({ user }) => {
	const classes = useStyles({});
	const [progress, setProgress] = React.useState(0.0);
	const [denmark, setDenmark] = React.useState(0.0)

	React.useEffect(() => {
		setTimeout(function () {
			setProgress(user.overallscore);
			setDenmark(user.danishuserscore.danishoverall);
		}, 100);
	});

	return (
		<div className={classes.page}>
			<div className={classes.titleContainer}>
				<Typography className={classes.overallText} align="center" variant="h5" component="h5">
					Your happiness compared
          </Typography>
				<Typography className={classes.overallSubtext} align="center" variant="h5">
					with others
          </Typography>
			</div>
			<div className={classes.gaugesContainer}>
				<div>
					<Box className={classes.gaugeBox}>
						<CircularProgress className={classes.gauge} variant="determinate" value={progress * 10} size={120} thickness={2.5} />
						<Box
							top={0}
							left={0}
							bottom={0}
							right={0}
							position="absolute"
							display="flex"
							alignItems="center"
							justifyContent="center">
							<Typography variant="h4" component="div">{user.overallscore}</Typography>
						</Box>
					</Box>
					<Typography variant="h6" component="div">You</Typography>
				</div>
				<div>
					<Box className={classes.gaugeBox}>
						<CircularProgress className={classes.gauge} variant="determinate" value={denmark * 10} size={120} thickness={2.5} />
						<Box
							top={0}
							left={0}
							bottom={0}
							right={0}
							position="absolute"
							display="flex"
							alignItems="center"
							justifyContent="center">
							<Typography variant="h4" component="div">{user.danishuserscore.danishoverall}</Typography>
						</Box>
					</Box>
					<Typography variant="h6" component="div">Avg. Denmark</Typography>
				</div>
			</div>
			<div className={classes.infoText}>
				<Typography variant="h6" component="div">You are among the</Typography>
				<p className={classes.blueText}>{user.danishuserscore.percent}%</p>
				<Typography variant="h6" component="div">happiest people in Denmark</Typography>
			</div>
			<div className={classes.infoText}>
				<Typography variant="h6" component="div">From out dataset of {user.danishuserscore.usersamount}</Typography>
				<Typography variant="h6" component="div">users from Denmark</Typography>
				<p className={classes.blueText}>{user.danishuserscore.usersless}</p>
				<Typography variant="h6" component="div">have a higher hapiness</Typography>
				<Typography variant="h6" component="div">score than you</Typography>
			</div>
		</div>
	)
}

export default Compare;
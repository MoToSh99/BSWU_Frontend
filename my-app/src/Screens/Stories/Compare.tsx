import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Flag from 'react-world-flags'
import CircularProgress from '@material-ui/core/CircularProgress';
import StyledRating from '@material-ui/lab/Rating';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { UserDetail } from '../../Models';
import FadeIn from 'react-fade-in';
import { getGaugeColor } from '../../Helpers';

const useStyles = makeStyles<Theme, any>((theme) => ({
	page: {
		padding: 30,
		display: "flex",
		flexDirection: "column",
		textAlign: "center"
	},
	gauge: {
		color: "#66FCF1"
	},
	gaugeBox: {
		position: "relative",
		marginTop: 30,
		padding: 10,
	},
	infoText: {
		marginTop: 25
	},
	gaugesContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	innerGaugesContainer:{
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		maxWidth:750,
	},
	blueText: {
		color: "#66FCF1",
		fontSize: 36
	},
	rating: {
		marginTop: 10
	},
	value : {
		color: "#66FCF1"
	},
	countryAveragesBox: {
		marginTop: 30,
		display: "flex",
		flexDirection: "column",
		alignItems: "center"
	},
	countryScores: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "80%",
		marginTop: 10
	},
	flagBox: {
		display: "flex",
		flexDirection: "row",
		width: "70%"
	},
	flagText: {
		marginLeft: 15
	}
}));

export interface CompareProps {
	user: UserDetail
}

const Compare: FC<CompareProps> = ({ user }) => {
	const classes = useStyles({});
	const [progress, setProgress] = React.useState(0.0);
	const [denmark, setDenmark] = React.useState(0.0)

	const [fade, setFade] = React.useState(false);

    const gaugeColor = getGaugeColor(user.overallscore, user.tweets.saddest.score, user.tweets.happiest.score);
	const denmarkGaugeColor = getGaugeColor(user.danishuserscore[0].danishoverall, user.tweets.saddest.score, user.tweets.happiest.score);
	const happierThanNumber = 10 - user.danishuserscore[0].percent / 10;
	const roundedHappierThanNumber = Math.round(happierThanNumber * 100) / 100

	React.useEffect(() => {
		setTimeout(function () {
			setProgress(user.overallscore);
			setDenmark(user.danishuserscore[0].danishoverall);
		}, 100);
		setFade(true);
	});

	return (
		<div className={classes.page}>
			<div>
				<Typography align="center" variant="h5" component="h5">
					Your happiness compared
				</Typography>
						<Typography align="center" variant="h5">
							with others
				</Typography>
			</div>
			<FadeIn delay={600} visible={fade}>
			<div className={classes.gaugesContainer}>
				<div className={classes.innerGaugesContainer}>
					<div>
						<Box className={classes.gaugeBox}>
							<CircularProgress style={{color: gaugeColor}} variant="determinate" value={progress * 10} size={100} thickness={2.5} />
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
							<CircularProgress style={{color: denmarkGaugeColor}} variant="determinate" value={denmark * 10} size={100} thickness={2.5} />
							<Box
								top={0}
								left={0}
								bottom={0}
								right={0}
								position="absolute"
								display="flex"
								alignItems="center"
								justifyContent="center">
								<Typography variant="h4" component="div">{user.danishuserscore[0].danishoverall}</Typography>
							</Box>
						</Box>
						<Typography variant="h6" component="div">Denmark avg.</Typography>
					</div>
				</div>
			</div>
			<div className={classes.infoText}>
				<Typography variant="subtitle1" component="div">You are happier than <span className={classes.value}>{(roundedHappierThanNumber)}</span> out of 10 Danes</Typography>
			</div>
			<StyledRating
				name="hover-feedback"
				readOnly={true}
				className={classes.rating}
				defaultValue={roundedHappierThanNumber}
				precision={0.2}
				size="large"
				max={10}
				icon={<AccessibilityIcon fontSize="inherit" />}
        	/>
			<div className={classes.countryAveragesBox}>
				<Typography variant="h6" component="div">Other national averages</Typography>
				<Box className={classes.countryScores}>
					<Box className={classes.flagBox}>
						<Flag code={user.nationalAverages[4].countryCode} height="25" width="40" />
						<Typography className={classes.flagText} variant="subtitle1">{user.nationalAverages[4].countryName}</Typography>
					</Box>
					<Typography variant="h6">{user.nationalAverages[4].overall}</Typography>
				</Box>
				<Box className={classes.countryScores}>
					<Box className={classes.flagBox}>
						<Flag code={user.nationalAverages[3].countryCode} height="25" width="40" />
						<Typography className={classes.flagText} variant="subtitle1">{user.nationalAverages[3].countryName}</Typography>
					</Box>
					<Typography variant="h6">{user.nationalAverages[3].overall}</Typography>
				</Box>
				<Box className={classes.countryScores}>
					<Box className={classes.flagBox}>
						<Flag code={user.nationalAverages[2].countryCode} height="25" width="40" />
						<Typography className={classes.flagText} variant="subtitle1">{user.nationalAverages[2].countryName}</Typography>
					</Box>
					<Typography variant="h6">{user.nationalAverages[2].overall}</Typography>
				</Box>
				<Box className={classes.countryScores}>
					<Box className={classes.flagBox}>
						<Flag code={user.nationalAverages[1].countryCode} height="25" width="40" />
						<Typography className={classes.flagText} variant="subtitle1">{user.nationalAverages[1].countryName}</Typography>
					</Box>
					<Typography variant="h6">{user.nationalAverages[1].overall}</Typography>
				</Box>
				<Box className={classes.countryScores}>
					<Box className={classes.flagBox}>
						<Flag code={user.nationalAverages[0].countryCode} height="25" width="40" />
						<Typography className={classes.flagText} variant="subtitle1">{user.nationalAverages[0].countryName}</Typography>
					</Box>
					<Typography variant="h6">{user.nationalAverages[0].overall}</Typography>
				</Box>
			</div>
			</FadeIn>
		</div>
	)
}

export default Compare;
import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
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
		marginTop: 30
	},
	infoText: {
		marginTop: 25
	},
	gaugesContainer: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-evenly",
		alignItems: "center"
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

	const gaugeColor = getGaugeColor(user.overallscore);
	const denmarkGaugeColor = getGaugeColor(user.danishuserscore.danishoverall)

	React.useEffect(() => {
		setTimeout(function () {
			setProgress(user.overallscore);
			setDenmark(user.danishuserscore.danishoverall);
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
							<Typography variant="h4" component="div">{user.danishuserscore.danishoverall}</Typography>
						</Box>
					</Box>
					<Typography variant="h6" component="div">Avg. Denmark</Typography>
				</div>
			</div>
			<div className={classes.infoText}>
				<Typography variant="subtitle1" component="div"><span className={classes.value}>{user.danishuserscore.percent / 10}</span> out of 10 Danes are happier than you</Typography>
			</div>
			<StyledRating
				className={classes.rating}
				defaultValue={(100 - user.danishuserscore.percent) / 10}
				precision={0.2}
				size="large"
				max={10}
				icon={<AccessibilityIcon fontSize="inherit" />}
        	/>
			<div className={classes.infoText}>
				<Typography variant="subtitle1" component="div">From our dataset of {user.danishuserscore.usersamount}</Typography>
				<Typography variant="subtitle1" component="div">users from Denmark</Typography>
				<Typography variant="subtitle1" className={classes.blueText}>{user.danishuserscore.usersless}</Typography>
				<Typography variant="subtitle1" component="div">have a higher hapiness</Typography>
				<Typography variant="subtitle1" component="div">score than you</Typography>
			</div>
			</FadeIn>
		</div>
	)
}

export default Compare;
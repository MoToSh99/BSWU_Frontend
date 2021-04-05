import {
  Box,
  CircularProgress, Typography
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { FC } from "react";
import Chart from "react-apexcharts";
import FadeIn from 'react-fade-in';
import { getGaugeColor } from '../../Helpers';
import { UserDetail } from "../../Models";

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
    marginTop: 25
  },
  weekdaysBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15
  },
  middleWeekday: {
    position: "relative",
    marginTop: 25,
    marginLeft: 25,
    marginRight: 25
  },
  scoreLabel: {
      marginBottom: 30
  },
  weekdayText: {
    marginTop: 5
  }
}));



export interface WeekdayScoresProps {
  user: UserDetail;
}

const WeekdayScores: FC<WeekdayScoresProps> = ({ user }) => {
  const classes = useStyles({});

  const [fade, setFade] = React.useState(false);

  const firstGaugeColor = getGaugeColor(user.weekscores[0].Score);
  const secondGaugeColor = getGaugeColor(user.weekscores[1].Score);
  const thirdGaugeColor = getGaugeColor(user.weekscores[2].Score);
  const fourthGaugeColor = getGaugeColor(user.weekscores[3].Score);
  const fifthGaugeColor = getGaugeColor(user.weekscores[4].Score);
  const sixthGaugeColor = getGaugeColor(user.weekscores[5].Score);
  const seventhGaugeColor = getGaugeColor(user.weekscores[6].Score);

  React.useEffect(() => {
		setFade(true);
	});

  const options = {
    chart: {
      height: 350,
      type: 'bar',
      toolbar: {
        show: false,
      }
    },
    colors: ["#edf8fb", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#005824"],
    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      categories: [
        user.weekscores[0].Day,
        user.weekscores[1].Day,
        user.weekscores[2].Day,
        user.weekscores[3].Day,
        user.weekscores[4].Day,
        user.weekscores[5].Day,
        user.weekscores[6].Day
      ],
      labels: {
        style: {
          colors: "white",
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      min: user.weekscores[6].Score - 0.2,
      max: user.weekscores[0].Score + 0.05,
      labels: {
        style: {
          colors: "white",
          fontSize: '12px'
        }
    }
  }
};

  const series = [
    {
      name: "WeekScores",
      data: [user.weekscores[0].Score,user.weekscores[1].Score,user.weekscores[2].Score,user.weekscores[3].Score,user.weekscores[4].Score,user.weekscores[5].Score,user.weekscores[6].Score]
    }
  ];

  return (
    <div className={classes.page}>
        <div>
            <Typography
            align="center"
            variant="h5"
            component="h5"
            >
            Your happiest day of the week
            </Typography>
        </div>
        <FadeIn delay={300} visible={fade}>
          <div>
            <Box className={classes.gaugeBox}>
                <CircularProgress style={{color: firstGaugeColor}} variant="determinate" value={100} size={100} thickness={1.5} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography variant="h4" component="div">{user.weekscores[0].Score}</Typography>
                </Box>
            </Box>
            <Typography className={classes.weekdayText} variant="h5">{user.weekscores[0].Day}</Typography>
          </div>
          <Box className={classes.weekdaysBox}>
            <Box className={classes.gaugeBox}>
                <CircularProgress style={{color: secondGaugeColor}} variant="determinate" value={100} size={80} thickness={1.5} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography className={classes.scoreLabel} variant="h5" component="div">{user.weekscores[1].Score}</Typography>
                </Box>
                <Typography className={classes.weekdayText} variant="subtitle1">{user.weekscores[1].Day}</Typography>
            </Box>
            <Box className={classes.middleWeekday}>
                <CircularProgress style={{color: thirdGaugeColor}} variant="determinate" value={100} size={80} thickness={1.5} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography className={classes.scoreLabel} variant="h5" component="div">{user.weekscores[2].Score}</Typography>
                </Box>
                <Typography className={classes.weekdayText} variant="subtitle1">{user.weekscores[2].Day}</Typography>
            </Box>
            <Box className={classes.gaugeBox}>
                <CircularProgress style={{color: fourthGaugeColor}} variant="determinate" value={100} size={80} thickness={1.5} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography className={classes.scoreLabel} variant="h5" component="div">{user.weekscores[3].Score}</Typography>
                </Box>
                <Typography className={classes.weekdayText} variant="subtitle1">{user.weekscores[3].Day}</Typography>
            </Box>
          </Box>
          <Box className={classes.weekdaysBox}>
            <Box className={classes.gaugeBox}>
                <CircularProgress style={{color: fifthGaugeColor}} variant="determinate" value={100} size={80} thickness={1.5} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography className={classes.scoreLabel} variant="h5" component="div">{user.weekscores[4].Score}</Typography>
                </Box>
                <Typography className={classes.weekdayText} variant="subtitle1">{user.weekscores[4].Day}</Typography>
            </Box>
            <Box className={classes.middleWeekday}>
                <CircularProgress style={{color: sixthGaugeColor}} variant="determinate" value={100} size={80} thickness={1.5} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography className={classes.scoreLabel} variant="h5" component="div">{user.weekscores[5].Score}</Typography>
                </Box>
                <Typography className={classes.weekdayText} variant="subtitle1">{user.weekscores[5].Day}</Typography>
            </Box>
            <Box className={classes.gaugeBox}>
                <CircularProgress style={{color: seventhGaugeColor}} variant="determinate" value={100} size={80} thickness={1.5} />
                <Box
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                    position="absolute"
                    display="flex"
                    alignItems="center"
                    justifyContent="center">
                    <Typography className={classes.scoreLabel} variant="h5" component="div">{user.weekscores[6].Score}</Typography>
                </Box>
                <Typography className={classes.weekdayText} variant="subtitle1">{user.weekscores[6].Day}</Typography>
            </Box>
          </Box>
        </FadeIn>
        <Chart options={options} series={series} type="bar" height={350}/>
      
    </div>
  )
}

export default WeekdayScores;

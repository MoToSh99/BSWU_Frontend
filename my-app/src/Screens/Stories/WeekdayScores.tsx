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
  header: {
    marginBottom: "20px",
  },
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

  const firstGaugeColor = getGaugeColor(user.highestweekscore.Score);
  const data = [user.weekscores[0].Score,
                user.weekscores[1].Score,
                user.weekscores[2].Score,
                user.weekscores[3].Score,
                user.weekscores[4].Score,
                user.weekscores[5].Score,
                user.weekscores[6].Score];
  const sortedData = [...data].sort();
  const sortedColors = ["#edf8fb", "#ccece6", "#99d8c9", "#66c2a4", "#41ae76", "#238b45", "#005824"];
  const colorArray = ["", "", "", "", "", "", ""];
  for (var i = 0; i < 7; i++) {
    colorArray[data.indexOf(sortedData[i])] = sortedColors[i];
  };

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
    colors: colorArray,
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
          fontSize: '14px'
        }
      }
    },
    yaxis: {
      min: user.lowestweekscore.Score - 0.05,
      max: user.highestweekscore.Score + 0.05,
      labels: {
        style: {
          colors: "white",
          fontSize: '14px'
        }
    }
  }
};

  const series = [
    {
      name: "WeekScores",
      data: data
    }
  ];

  return (
    <div className={classes.page}>
        <div className="header">
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
                    <Typography variant="h4" component="div">{user.highestweekscore.Score}</Typography>
                </Box>
            </Box>
            <Typography className={classes.weekdayText} variant="h5">{user.highestweekscore.Day}</Typography>
          </div>

        <Chart options={options} series={series} type="bar" height={350}/>
          
        </FadeIn>
      
    </div>
  )
}

export default WeekdayScores;

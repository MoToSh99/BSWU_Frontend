import {
  Box,
  CircularProgress, 
  Typography,
  Avatar
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import React, { FC } from "react";
import Chart from "react-apexcharts";
import FadeIn from 'react-fade-in';
import { getGaugeColor } from '../../Helpers';
import { UserDetail } from "../../Models";
import { Colorscale } from 'react-colorscales';
import sad_emoji from "../../Images/sad_emoji.webp";
import happy_emoji from "../../Images/happy_emoji.png";
import very_happy_emoji from "../../Images/very_happy_emoji.webp";

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
    marginTop: 15,
    maxWidth: 1000
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
  },
  chart: {
    margin: "auto",
    maxWidth: 1000
  },
  avatarBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "10px"
  },
  avatar: {
    width: "25px",
    height: "25px"
  },
  neutralText: {
    marginLeft: "20px"
  }
}));

export interface WeekdayScoresProps {
  user: UserDetail;
}

const WeekdayScores: FC<WeekdayScoresProps> = ({ user }) => {
  const classes = useStyles({});

  const [fade, setFade] = React.useState(false);

  const firstGaugeColor = getGaugeColor(user.highestweekscore.Score, user.tweets.saddest.score, user.tweets.happiest.score);
  
  const data = [user.weekscores[0].Score,
                user.weekscores[1].Score,
                user.weekscores[2].Score,
                user.weekscores[3].Score,
                user.weekscores[4].Score,
                user.weekscores[5].Score,
                user.weekscores[6].Score];

  const colorArray = [getGaugeColor(user.weekscores[0].Score, user.tweets.saddest.score, user.tweets.happiest.score),
                      getGaugeColor(user.weekscores[1].Score, user.tweets.saddest.score, user.tweets.happiest.score),
                      getGaugeColor(user.weekscores[2].Score, user.tweets.saddest.score, user.tweets.happiest.score),
                      getGaugeColor(user.weekscores[3].Score, user.tweets.saddest.score, user.tweets.happiest.score),
                      getGaugeColor(user.weekscores[4].Score, user.tweets.saddest.score, user.tweets.happiest.score),
                      getGaugeColor(user.weekscores[5].Score, user.tweets.saddest.score, user.tweets.happiest.score),
                      getGaugeColor(user.weekscores[6].Score, user.tweets.saddest.score, user.tweets.happiest.score)];

  function roundHalf(num: number, upOrDown: string) {
    var rounded;
    if (upOrDown === "down") {
      rounded = Math.floor(num*2) / 2;
      if (num - rounded <= 0.1) {
        return rounded - 0.5;
      } else {
        return rounded;
      }
    } else {
      rounded = Math.ceil(num*2) / 2;
      if (rounded - num <= 0.1) {
        return rounded + 0.5;
      } else {
        return rounded;
      }
    }
  };

  React.useEffect(() => {
		setFade(true);
	}, []);

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
      min: roundHalf(user.lowestweekscore.Score, "down"),
      max: roundHalf(user.highestweekscore.Score, "up"),
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

  const colorBarData = ["#e5f5e0", "#a1d99b", "#31a354"];

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
          <div className={classes.chart}>
            <Chart options={options} series={series} type="bar" height={350}/>
          </div>
          <Colorscale className={classes.colorScale} colorscale={colorBarData}/>
          <Box className={classes.avatarBox}>
            <Avatar src={sad_emoji} className={classes.avatar}/>
            <Avatar src={happy_emoji} className={classes.avatar}/>
            <Avatar src={very_happy_emoji} className={classes.avatar}/>
          </Box>
        </FadeIn>
      
    </div>
  )
}

export default WeekdayScores;

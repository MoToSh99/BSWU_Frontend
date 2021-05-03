import React, { FC } from 'react';
import { Box, Avatar, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { UserDetail} from '../../Models';
import Chart from "react-apexcharts";
import sad_emoji from "../../Images/sad_emoji.webp";
import happy_emoji from "../../Images/happy_emoji.png";
import very_happy_emoji from "../../Images/very_happy_emoji.webp";

const useStyles = makeStyles<Theme, any>((theme) => ({
  page: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 30,
    display: "flex",
    flexDirection: "column"
  },
  content: {
    margin: "auto",
    maxWidth: 900
  },
  chartStyle: {
    zIndex: 1,
    position: "relative"
  },
  avatarBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: "12px",
    marginTop: "20px"
  },
  avatar: {
    width: "25px",
    height: "25px"
  },
  dateStartText: {
    position: "absolute",
    marginTop: 30,
    marginLeft: 30,
    zIndex: 1
  },
  dateEndText: {
    position: "absolute",
    marginLeft: 30,
    zIndex: 1
  },
	value : {
		color: "#66FCF1"
	}
}));

export type EvolvedHapinessProps = {
  user: UserDetail
}

const EvolvedHapiness: FC<EvolvedHapinessProps> = ({user}) => {
  const classes = useStyles({});

  const shortenMonth = (month: string) => {
    return month.length > 3 ? month.substring(0, 3) + "." : month
  }

  const tweetstartArray = user.tweetstart.split(" ");
  const tweetstartString = shortenMonth(tweetstartArray[0]) + " '" + tweetstartArray[2].substring(2, 4);
  const tweetstartFullString = tweetstartArray[0] + " '" + tweetstartArray[2].substring(2, 4);
  const tweetendArray = user.tweetend.split(" ");
  const tweetendString = shortenMonth(tweetendArray[0]) + " '" + tweetendArray[2].substring(2, 4);
  const tweetendFullString = tweetendArray[0] + " '" + tweetendArray[2].substring(2, 4);

  const data = user.monthlyaverages;
  const xaxisMin = (user.averagesRange[0] - 0.06) < 0.0 ? 0.0 : (user.averagesRange[0] - 0.06);
  const xaxisMax = (user.averagesRange[1] + 0.06) > 1.0 ? 1.0 : (user.averagesRange[1] + 0.06);

  const options = {
    chart: {
      toolbar: {
        show: false
      },
      animations: {
        enabled: true,
        easing: 'easeinout',
        speed: 800
      }
    },
    markers: {
      size: 4
    },
    tooltip: {
      fillSeriesColor: true,
      custom: function({series, seriesIndex, dataPointIndex, w}) {
        return '<div style="background-color: #FFF; color: black; height: 20px; width: 100px; text-align: center">' +
          '<span>' + data[dataPointIndex][2] + '</span>' +
          '</div>'
      }
    },
    colors: ["#31a354"],
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      tickAmount: 3,
      position: "top",
      min: xaxisMin,
      max: xaxisMax,
      labels: {
        show: true,
        style: {
          fontSize: "1px"
        }
      },
      tooltip: {
        enabled: false
      }
    },
    yaxis: {
      reversed: true,
      max: data.length,
      labels: {
        show: false
      },
      min: 0,
      tooltip: {
        enabled: false
      }
    },
    grid: {
      borderColor: "white",
      xaxis: {
        lines: {
          show: true
        }
      },
      yaxis: {
        lines: {
          show: false
        },
      },
    }
  };

  const series = [
    {
      name: "series-1",
      data: data
    }
  ];

  return (
    <div className={classes.page}>
      <div className={classes.content}>
      <Typography align="center" variant="h5" component="div">
        The history of your happiness<br></br>
        from <span className={classes.value}>{tweetstartFullString}</span> to <span className={classes.value}>{tweetendFullString}</span>
      </Typography>
      <Box className={classes.avatarBox}>
        <Avatar src={sad_emoji} className={classes.avatar}/>
        <Avatar src={happy_emoji} className={classes.avatar}/>
        <Avatar src={very_happy_emoji} className={classes.avatar}/>
      </Box>
      <Box className={classes.chartStyle}>
        <Typography className={classes.dateStartText} variant="subtitle2">
          {tweetstartString}
        </Typography>
        <Typography className={classes.dateEndText} variant="subtitle2" style={{marginTop: window.innerHeight - 290}}>
          {tweetendString}
        </Typography>
        <Chart options={options} series={series} type="line" height={window.innerHeight - 240}/>
      </Box>
      </div>
    </div>
  )
}

export default EvolvedHapiness;
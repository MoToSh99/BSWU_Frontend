import React, { FC } from 'react';
import { Box, Avatar, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useLocation, useHistory } from "react-router-dom";
import { UserDetail} from '../../Models';
import Chart from "react-apexcharts";

const useStyles = makeStyles<Theme, any>((theme) => ({
  page: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 30,
    display: "flex",
    flexDirection: "column"
  },
  content: {
    //display: "flex",
    //flexDirection: "column",
    //alignItems: "center",
    margin: "auto",
    maxWidth: 900
  },
  chartStyle: {
    zIndex: 0,
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
    marginTop: 50,
    marginLeft: 30,
    zIndex: 1
  },
  dateEndText: {
    position: "absolute",
    marginTop: 560,
    marginLeft: 30,
    zIndex: 1
  }
}));

export type EvolvedHapinessProps = {
  user: UserDetail
}

const EvolvedHapiness: FC<EvolvedHapinessProps> = ({user}) => {
  const classes = useStyles({});
  const history = useHistory();
  const location = useLocation();

  const shortenMonth = (month: string) => {
    return month.length > 3 ? month.substring(0, 3) + "." : month
  }

  const tweetstartArray = user.tweetstart.split(" ");
  const tweetstartString = shortenMonth(tweetstartArray[0]) + " '" + tweetstartArray[2].substring(2, 4);
  const tweetendArray = user.tweetend.split(" ");
  const tweetendString = shortenMonth(tweetendArray[0]) + " '" + tweetendArray[2].substring(2, 4);

  const data = user.monthlyaverages;

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
    colors: ["#31a354"],
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      tickAmount: 2,
      position: "top",
      min: user.averagesRange[0],
      max: user.averagesRange[1],
      labels: {
        style: {
          colors: ["white", "white", "white", "white", "white", "white", "white", "white", "white"],
          fontSize: '16px'
        },
      }
    },
    yaxis: {
      reversed: true,
      max: data.length,
      labels: {
        show: false
      },
      min: 0
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
      <Typography align="center" variant="h5" component="h5">
        The evolution of your happiness
      </Typography>
      <Box className={classes.avatarBox}>
        <Avatar src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_grande.png?v=1571606093" className={classes.avatar}/>
        <Avatar src="https://hverdagstips.dk/wp-content/uploads/2019/09/smiley-emoji-smilende-ansigt-med-sammenknebne-ojne.png" className={classes.avatar}/>
        <Avatar src="https://cdn.shopify.com/s/files/1/1061/1924/products/Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_grande.png?v=1571606090" className={classes.avatar}/>
      </Box>
      <Box className={classes.chartStyle}>
        <Typography className={classes.dateStartText} variant="subtitle2">
          {tweetendString}
        </Typography>
        <Typography className={classes.dateEndText} variant="subtitle2">
          {tweetstartString}
        </Typography>
        <Chart options={options} series={series} type="line" height={window.innerHeight - 205}/>
      </Box>
      </div>
    </div>
  )
}

export default EvolvedHapiness;
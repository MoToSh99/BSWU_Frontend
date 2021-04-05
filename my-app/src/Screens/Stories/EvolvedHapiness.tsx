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
  }
}));

export type EvolvedHapinessProps = {
  user: UserDetail
}

const EvolvedHapiness: FC<EvolvedHapinessProps> = ({user}) => {
  const classes = useStyles({});
  const history = useHistory();
  const location = useLocation();

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
    stroke: {
      curve: "smooth"
    },
    xaxis: {
      tickAmount: 2,
      position: "top",
      min: 1,
      max: 9,
      labels: {
        style: {
          colors: ["white", "white", "white"],
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
      <Typography align="center" variant="h5" component="h5">
        The evolution of your happiness
      </Typography>
      <Box className={classes.avatarBox}>
        <Avatar src="https://cdn.shopify.com/s/files/1/1061/1924/products/Emoji_Icon_-_Sad_Emoji_grande.png?v=1571606093" className={classes.avatar}/>
        <Avatar src="https://hverdagstips.dk/wp-content/uploads/2019/09/smiley-emoji-smilende-ansigt-med-sammenknebne-ojne.png" className={classes.avatar}/>
        <Avatar src="https://cdn.shopify.com/s/files/1/1061/1924/products/Happy_Emoji_Icon_5c9b7b25-b215-4457-922d-fef519a08b06_grande.png?v=1571606090" className={classes.avatar}/>
      </Box>
      <Box className={classes.chartStyle}>
        <Chart options={options} series={series} type="line" height={window.innerHeight - 205}/>
      </Box>
    </div>
  )
}

export default EvolvedHapiness;
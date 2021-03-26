import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useLocation, useHistory } from "react-router-dom";
import { UserDetail} from '../../Models';
import Chart from "react-apexcharts";

const useStyles = makeStyles<Theme, any>((theme) => ({
  page: {
    paddingTop: 30,
    display: "flex",
    flexDirection: "column"
  },
  chartStyle: {
    height: "500px",
    background: "transparent"
  }
}));

export type EvolvedHapinessProps = {
  user: UserDetail
}

const EvolvedHapiness: FC<EvolvedHapinessProps> = ({user}) => {
  const classes = useStyles({});
  const history = useHistory();
  const location = useLocation();

  const options = {
    chart: {
      toolbar: {
        show: false
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
        }
      }
    },
    yaxis: {
      labels: {
        show: false
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
        }
      }
    }
  };

  const series = [
    {
      name: "series-1",
      data: [[5.1, 1], [6.1, 2], [4.2, 3], [6.2, 4], [5.4, 5], [5.7, 6], [6.3, 7], [5.1, 8]]
    }
  ];

  return (
    <div className={classes.page}>
      <Box>
        <Chart options={options} series={series} type="line" height="500px"/>
      </Box>
    </div>
  )
}

export default EvolvedHapiness;
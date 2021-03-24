import React, { FC } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useLocation, useHistory } from "react-router-dom";
import { UserDetail} from '../../Models';
import { Chart } from 'react-charts'

const useStyles = makeStyles<Theme, any>((theme) => ({
  page: {
    padding: 30,
    display: "flex",
    flexDirection: "column"
  },
  chartStyle: {
    height: "500px",
    width: "300px",
    background: 'rgba(0, 27, 45, 0.9)',
    padding: '.5rem'
  }
}));

export type EvolvedHapinessProps = {
  user: UserDetail
}

const EvolvedHapiness: FC<EvolvedHapinessProps> = ({user}) => {
  const classes = useStyles({});
  const history = useHistory();
  const location = useLocation();

  const data = React.useMemo(
    () => [
      {
        label: 'Series 1',
        data: [[4.2, 1], [5.3, 2], [5.5, 3], [6.0, 4], [4.3, 5]]
      },
    ],
    []
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'top' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  var chartOptions = {
    scales: {
      xAxes: [{
          ticks: {
              beginAtZero:true,
              min: 0,
              max: 10    
          }
        }]
     }
}

  return (
    <div className={classes.page}>
      <div className={classes.chartStyle}>
        <Chart data={data} axes={axes} dark options={chartOptions} />
      </div>
    </div>
  )
}

export default EvolvedHapiness;
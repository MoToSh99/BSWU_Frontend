import React, { FC } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useLocation, useHistory } from "react-router-dom";
import { UserDetail} from '../../Models';
import { Chart } from 'react-charts'

const useStyles = makeStyles<Theme, any>((theme) => ({
  page: {
    paddingTop: 30,
    display: "flex",
    flexDirection: "column"
  },
  chartStyle: {
    height: "500px",
    background: 'rgba(0, 27, 45, 0.9)'
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
      }
    ],
    []
  )

  const series = React.useMemo(
    () => ({
      showPoints: false,
    }),
    []
  );
 
  const axes = React.useMemo(
    () => [
      { primary: true, 
        type: 'linear', 
        position: 'top', 
        hardMin: 1, 
        hardMax: 9, 
        tickValues: 2,
        tickSizeInner: 1,
        tickSizeOuter: 10
      },
      { type: 'time', position: 'left' }
    ],
    []
  )

  return (
    <div className={classes.page}>
      <Box className={classes.chartStyle}>
        <Chart data={data} series={series} axes={axes} dark />
      </Box>
    </div>
  )
}

export default EvolvedHapiness;
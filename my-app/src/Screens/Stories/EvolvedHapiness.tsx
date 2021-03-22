import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { useLocation, useHistory } from "react-router-dom";
import { User } from '../../Models';
import Plot from 'react-plotly.js';

const useStyles = makeStyles<Theme, any>((theme) => ({
  page: {
    padding: 30,
    display: "flex",
    flexDirection: "column",
    backgroundColor: theme.palette.background.default
  }
}));

export type OwnChartProps = {
  data: string
}

const OwnChart: FC<OwnChartProps> = (
  data,
) => {
  return (
    <Plot
      data={[
        {
          x: ["jan", "feb", "mar", "jul", "jun"],
          y: [2, 6, 3, 7, 10],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
      ]}
      layout={{
        width: 320,
        height: 320,
        title: {
          text: 'How your happiness has evolved',
          font: {
            color: "white"
          }
        },
        paper_bgcolor: "#1F2833",
        plot_bgcolor: "#1F2833",
        margin: {
          l: 20,
          r: 20,
          b: 50,
          t: 50,
          pad: 4
        },
        xaxis: {
          color: "white"
        },
        yaxis: {
          color: "white"
        }
      }
      }
      config={{ displayModeBar: false }}
    />
  )
}

export type EvolvedHapinessProps = {
  data: string
}

const EvolvedHapiness: FC<EvolvedHapinessProps> = (props) => {
  const classes = useStyles({});
  const history = useHistory();
  const location = useLocation();
  const userinfo: User = location.state.memberDetail

  return (
    <div className={classes.page}>
      <OwnChart data="hej" />
    </div> 
  )
}

export default EvolvedHapiness;
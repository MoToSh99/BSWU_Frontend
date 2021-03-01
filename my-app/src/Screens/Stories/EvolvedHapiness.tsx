import React, { FC } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { useLocation, useHistory } from "react-router-dom";
import { User } from '../../Models';

import { ResponsiveLine } from '@nivo/line'


const useStyles = makeStyles<Theme, any>((theme) => ({
    page: {
        padding: 30,
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
        backgroundColor: theme.palette.background.default
    },
    avatar: {
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: 46,
      width: 40,
      height: 40
    },
    titleContainer: {
      marginTop: 30
    }
}));
    
export interface OverallProps {
}

export const works = [
        {
          "id": "japan",
          "color": "hsl(62, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 296
            },
            {
              "x": "helicopter",
              "y": 272
            },
            {
              "x": "boat",
              "y": 151
            },
            {
              "x": "train",
              "y": 24
            },
            {
              "x": "subway",
              "y": 272
            },
            {
              "x": "bus",
              "y": 49
            },
            {
              "x": "car",
              "y": 20
            },
            {
              "x": "moto",
              "y": 177
            },
            {
              "x": "bicycle",
              "y": 172
            },
            {
              "x": "horse",
              "y": 119
            },
            {
              "x": "skateboard",
              "y": 256
            },
            {
              "x": "others",
              "y": 199
            }
          ]
        },
        {
          "id": "france",
          "color": "hsl(197, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 8
            },
            {
              "x": "helicopter",
              "y": 176
            },
            {
              "x": "boat",
              "y": 139
            },
            {
              "x": "train",
              "y": 48
            },
            {
              "x": "subway",
              "y": 282
            },
            {
              "x": "bus",
              "y": 125
            },
            {
              "x": "car",
              "y": 63
            },
            {
              "x": "moto",
              "y": 241
            },
            {
              "x": "bicycle",
              "y": 234
            },
            {
              "x": "horse",
              "y": 18
            },
            {
              "x": "skateboard",
              "y": 234
            },
            {
              "x": "others",
              "y": 152
            }
          ]
        },
        {
          "id": "us",
          "color": "hsl(283, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 50
            },
            {
              "x": "helicopter",
              "y": 203
            },
            {
              "x": "boat",
              "y": 74
            },
            {
              "x": "train",
              "y": 250
            },
            {
              "x": "subway",
              "y": 243
            },
            {
              "x": "bus",
              "y": 30
            },
            {
              "x": "car",
              "y": 256
            },
            {
              "x": "moto",
              "y": 60
            },
            {
              "x": "bicycle",
              "y": 97
            },
            {
              "x": "horse",
              "y": 28
            },
            {
              "x": "skateboard",
              "y": 191
            },
            {
              "x": "others",
              "y": 177
            }
          ]
        },
        {
          "id": "germany",
          "color": "hsl(196, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 118
            },
            {
              "x": "helicopter",
              "y": 188
            },
            {
              "x": "boat",
              "y": 286
            },
            {
              "x": "train",
              "y": 44
            },
            {
              "x": "subway",
              "y": 79
            },
            {
              "x": "bus",
              "y": 40
            },
            {
              "x": "car",
              "y": 98
            },
            {
              "x": "moto",
              "y": 242
            },
            {
              "x": "bicycle",
              "y": 195
            },
            {
              "x": "horse",
              "y": 268
            },
            {
              "x": "skateboard",
              "y": 90
            },
            {
              "x": "others",
              "y": 154
            }
          ]
        },
        {
          "id": "norway",
          "color": "hsl(227, 70%, 50%)",
          "data": [
            {
              "x": "plane",
              "y": 176
            },
            {
              "x": "helicopter",
              "y": 132
            },
            {
              "x": "boat",
              "y": 47
            },
            {
              "x": "train",
              "y": 27
            },
            {
              "x": "subway",
              "y": 83
            },
            {
              "x": "bus",
              "y": 261
            },
            {
              "x": "car",
              "y": 224
            },
            {
              "x": "moto",
              "y": 121
            },
            {
              "x": "bicycle",
              "y": 87
            },
            {
              "x": "horse",
              "y": 158
            },
            {
              "x": "skateboard",
              "y": 4
            },
            {
              "x": "others",
              "y": 262
            }
          ]
        }
  ];



  const MyResponsiveLine = ({ data /* see data tab */ }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            orient: 'bottom',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle'
        }}
        axisLeft={{
            orient: 'left',
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle'
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)

const EvolvedHapiness: FC<EvolvedHapinessProps> = (props) => {
    const classes = useStyles({});
    const history = useHistory();
    const location = useLocation();
    const userinfo : User = location.state.memberDetail
    
    return (
      <div className={classes.page}>
        <div className={classes.titleContainer}>
          <Typography className={classes.overallText} align="center" variant="h5" component="h5">
          How your happiness has evolved
          </Typography>
      </div>

      <MyResponsiveLine data={works}/>

      </div>
      )
}

export default EvolvedHapiness;
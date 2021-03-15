import React, { FC, useEffect, useState} from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./legoloading.json";
import * as doneData from "./doneloading.json";
import { Typography } from '@material-ui/core';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const defaultOptions2 = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};


export type LoadingInfoProps = {

}

const LoadingInfo: FC<LoadingInfoProps> = () => {

const [done, setDone] = React.useState(false);
const [loading, setLoading] = React.useState(true)
const [loading2, setLoading2] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
          setLoading(false);
          setLoading2(true);
          setTimeout(() => {
            setLoading2(false);
          }, 1500);
          setTimeout(() => {
            setDone(true);
          }, 4000);
        }, 2000);
	});


    return (
      <div>
        {!done ? (
          <FadeIn>
            <div className="d-flex justify-content-center align-items-center">
            <Typography align="center" variant="h5" component="h5">
            Fetching Twitter data
            </Typography>
              {loading ? (
                <Lottie options={defaultOptions} height={120} width={120} />
              ) : (
                <Lottie options={defaultOptions2} height={120} width={120} />
              )}
            </div>
            <div className="d-flex justify-content-center align-items-center">
            <Typography align="center" variant="h5" component="h5">
            Doing fancy calulations
            </Typography>
              {loading2 ? (
                <Lottie options={defaultOptions} height={120} width={120} />
              ) : (
                <Lottie options={defaultOptions2} height={120} width={120} />
              )}
            </div>
          </FadeIn>
          
        ) : (
          <h1>Done</h1>
        )}
      </div>
    );
  }


export default LoadingInfo;

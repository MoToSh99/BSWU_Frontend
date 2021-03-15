import React, { FC, useEffect, useState} from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from "./legoloading.json";
import * as doneData from "./doneloading.json";

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
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => {
          setLoading(false);
          setLoading2(true);
          setTimeout(() => {
            setLoading2(false);
          }, 1500);
          setTimeout(() => {
            setDone(true);
          }, 15000);
        });
    }, 2000);
	});


    return (
      <div>
        {!done ? (
          <FadeIn>
            <div className="d-flex justify-content-center align-items-center">
              <h1>Fetching Twitter data</h1>
              {loading ? (
                <Lottie options={defaultOptions} height={120} width={120} />
              ) : (
                <Lottie options={defaultOptions2} height={120} width={120} />
              )}
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <h1>Doing fancy calulations</h1>
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

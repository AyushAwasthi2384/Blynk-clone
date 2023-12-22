import React, { useRef, useState } from 'react'
import './com.css'

import vdoPath from "./dial.mp4";

export default function AnalogDial({ dialName }) {
  const videoRef = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [onOFF, setonOFF] = useState("OFF");

  const handlePlayPause = () => {
    videoRef.current.playbackRate = .2;
    videoRef1.current.playbackRate = .5;
    videoRef2.current.playbackRate = .4;
    if (videoRef.current.paused || videoRef1.current.paused || videoRef2.current.paused) {
      videoRef.current.play();
      videoRef1.current.play();
      videoRef2.current.play();
      setTimeout(() => {
        videoRef.current.pause();
      }, 6 * 1000);
      setTimeout(() => {
        videoRef1.current.pause();
      }, 4 * 1000);
      setTimeout(() => {
        videoRef2.current.pause();
      }, 4 * 1000);
      setonOFF("ON")
    } else {
      videoRef.current.pause();
      videoRef1.current.pause();
      videoRef2.current.pause();
      videoRef.current.currentTime = 0;
      videoRef1.current.currentTime = 0;
      videoRef2.current.currentTime = 0;
      setonOFF("OFF")
    }
  };
  return (

    <div>
      <div className="temp temp1"></div>
      <div className="temp temp2"></div>
      <div className="temp temp3"></div>
      {/* <div className="title">{dialName}</div> */}
      <div className="dial">
        <div className="title tit1">Soil Moisture</div>
        <video className='vdo vdo1' ref={videoRef} width="320" height="240" >
          <source src={vdoPath} type="video/mp4" />
        </video>
        <div className="title tit2">Humidity</div>
        <video className='vdo vdo2' ref={videoRef1} width="320" height="240" >
          <source src={vdoPath} type="video/mp4" />
        </video>
        <div className="title tit3">Temperature</div>
        <video className='vdo vdo3' ref={videoRef2} width="320" height="240" >
          <source src={vdoPath} type="video/mp4" />
        </video>


        <button className='on-off' onClick={handlePlayPause}>
          {onOFF}
        </button>
      </div>
    </div>
  )
}

import React, { useRef } from "react";
import "./VideoPlayer.css";

const VideoPlayer = ({ playState, setPlayState }) => {
  
  const player = useRef(null);

  const closePlayer = (event) => {
    if(event.target === player.current) {
        setPlayState(false)
    }
  }

  return (
    <div className={`video-player ${playState ? "" : "hide"}`} ref={player} onClick={closePlayer}>
      <iframe src="https://www.youtube.com/embed/ZUV50N4n2XM?autoplay=1"></iframe>
    </div>
  );
};

export default VideoPlayer;

import React, { useRef, useState } from "react";
import "./video.css";
import video from "../assets/video.mp4";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
const Video = () => {
  const videoRef = useRef(null);
  const [playing, setplaying] = useState(false);
  const handleVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setplaying(false);
    } else {
      videoRef.current.play();
      setplaying(true);
    }
  };
  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        ref={videoRef}
        className="video__player"
        loop
        src={video}
      />
      <VideoFooter />
      <VideoSidebar />
    </div>
  );
};

export default Video;

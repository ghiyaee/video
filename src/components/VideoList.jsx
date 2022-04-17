import React from "react";
import VideoItems from "./VideoItems";
import './VideoList.css'
const VideoList = ({ videos, onVideoSelect }) => {
  const renderlist = videos.map((Video) => {
    return <VideoItems onVideoSelect={onVideoSelect} video={Video} />;
  });
  return <div className="list-video">{renderlist}</div>;
};
export default VideoList
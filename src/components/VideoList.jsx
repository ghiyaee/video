import React from "react";
import VideoItems from "./VideoItems";
const VideoList = ({ videos, onVideoSelect }) => {
  const renderlist = videos.map((Video) => {
    return <VideoItems onVideoSelect={onVideoSelect} video={Video} />;
  });
  return <div>{renderlist}</div>;
};
export default VideoList
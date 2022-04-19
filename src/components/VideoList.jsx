import React from "react";
import VideoItems from "./VideoItems";
import './VideoList.css'
const VideoList = ({ videos, onVideoSelect }) => {
   console.log(videos);
  const renderlist = videos.map((Video) => {
    return <VideoItems key={Video.id.videoId} onVideoSelect={onVideoSelect} video={Video} />
  })
  return <div className="list-video">{renderlist}</div>
};
export default VideoList
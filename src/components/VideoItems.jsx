import React from "react";
import './VideoItems.css'

const VideoItems = ({ video, onVideoSelect }) => {
  return (
    <div className="list" onClick={() => onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url}  />
      {video.snippet.title}
    </div>
  );
};

export default VideoItems
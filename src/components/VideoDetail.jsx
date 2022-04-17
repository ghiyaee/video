import React from "react";
import './VideoDetail.css'

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }
    return (
      <div className="detail">
            <h4 className="titel">{video.snippet.title}</h4>
            <p>{video.snippet.description }</p>
      </div>
    );
}
export default VideoDetail;
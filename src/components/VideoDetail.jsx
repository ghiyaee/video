import React from "react";
import './VideoDetail.css'

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>Loading...</div>
    }
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return (
        <div className="detail">
            <div className="ifrm">
                <iframe src={ videoSrc}/>
            </div>
            <h4 className="titel">{video.snippet.title}</h4>
            <p>{video.snippet.description }</p>
      </div>
    );
}
export default VideoDetail;
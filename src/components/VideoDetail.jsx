import React ,{useState} from "react";
import './VideoDetail.css'

const VideoDetail = ({ video }) => {
    const [up, setUp] = useState(0)
     const [down, setDown] = useState(0)
    const upHandel  =() =>{ setUp(up + 1 ) }
    const downHandel = () => { setDown(down + 1) }
    if (!video) {
        return <div><i className="spinner loading icon"></i></div>
    }
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return (
      <div className="detail">
        <div className="ifrm">
          <iframe titel="video player" src={videoSrc} className="ifrm" />
        </div>
        <h3 className="titel">{video.snippet.title}</h3>
        <h4>{video.snippet.description}</h4>
        <div className="icon">
                <i className="thumbs up outline icon large " onClick={upHandel}>&nbsp;&nbsp;{up}</i>
                <i className="thumbs down outline icon large " onClick={downHandel}>&nbsp;&nbsp;{down}</i>
        </div>
      </div>
    );
}
export default VideoDetail;
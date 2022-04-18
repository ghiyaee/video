import React ,{useState} from "react";
import './VideoDetail.css'

const VideoDetail = ({ video }) => {
    const [up, setUp] = useState(0)
     const [down, setDown] = useState(0);
    const upHandel  =() =>{
       setUp(up + 1 )
    }
    const downHandel = () => {
        setDown(down + 1)
    }
    if (!video) {
        return <div>Loading...</div>
    }
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return (
      <div className="detail">
        <div className="ifrm">
          <iframe src={videoSrc} className="ifrm" />
        </div>
        <h4 className="titel">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
        <div className="icon">
                <i className="thumbs up outline icon big " onClick={upHandel}>{up}</i>
                <i class="thumbs down outline icon big " onClick={downHandel}>{down}</i>
        </div>
      </div>
    );
}
export default VideoDetail;
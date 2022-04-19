import React from "react";
import YouTube from "../Apis/YouTube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import './App.css'
class App extends React.Component{
  state = { videos: [], selectedVideo: null }
  componentDidMount() {
    this.onSubmitValue('hello')
  }
  onSubmitValue = async (word) => {   
    const respons = await YouTube.get('/search', {
      params:
        { q: word }
    })
    this.setState({ videos: respons.data.items, selectedVideo: respons.data.items[0] })
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo:video});
  
  }
    render() {
        return (
          <div className="container">
            <SearchBar onSubmit={this.onSubmitValue} />
            <div className="display">
              <div className="videoDetail">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
             
              <div className="videoList">
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
              </div>
           
            </div>
          </div>
        );
    }
}
export default App;
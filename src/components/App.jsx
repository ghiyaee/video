import React from "react";
import YouTube from "../Apis/YouTube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import './App.css'
class App extends React.Component{

  state={videos:[],selectedVideo:null}
  onSubmitValue = async (term) => {   
    const respons = await YouTube.get('/search', {
      params:
        { q: term }
    })

    this.setState({ videos: respons.data.items })
  }
  onVideoSelect = (video) => {
    this.setState({selectedVideo:video});
  
  }
    render() {
        return (
          <div className="container">
            <SearchBar onSubmit={this.onSubmitValue} />
            <VideoDetail video ={this. state.selectedVideo} />
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
             
          </div>
        );
    }
}
export default App;
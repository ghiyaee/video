import React from "react";
import YouTube from "../Apis/YouTube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
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
    console.log('the app ',video);
  
  }
    render() {
        return (
          <div className="container">
            <SearchBar onSubmit={this.onSubmitValue} />
            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            
          </div>
        );
    }
}
export default App;
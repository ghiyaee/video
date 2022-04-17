import React from "react";
import YouTube from "../Apis/YouTube";
import SearchBar from "./SearchBar";
import './App.css'
class App extends React.Component{

  state={videos:[]}
  onSubmitValue = async (term) => {   
    const respons = await YouTube.get('/search', {
      params:
        { q: term }
    })

    this.setState({ videos: respons.data.items })
    console.log(respons.data);
    }
    render() {
        return (
          <div className="container">
            <SearchBar onSubmit={this.onSubmitValue} />

          </div>
        );
    }
}
export default App;
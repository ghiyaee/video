import React from "react";
import SearchBar from "./SearchBar";
import './App.css'
class App extends React.Component{
  state={textValue:''}
  onSubmitValue = (term) => {
    
      this.setState({textValue:term})
    }
    render() {
        return (
          <div className="container">
            <SearchBar onSubmit={this.onSubmitValue} />
            {this.state.textValue}
          </div>
        );
    }
}
export default App;